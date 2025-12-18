"use client";

import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInAnonymously,
  linkWithCredential,
  linkWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useAuth } from "@/app/context/AuthContext";

import { AiOutlineClose } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

type LoginDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type AuthMode = "login" | "signup";

const googleProvider = new GoogleAuthProvider();

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [mode, setMode] = useState<AuthMode>("login");
  const { user } = useAuth();

  useEffect(() => {
    if (user && open) {
      onOpenChange(false);
    }
  }, [user]);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(isOpen) => {
        onOpenChange(isOpen);
        if (!isOpen) setMode("login"); // reset when closed
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="dialogue__overlay" />
        <Dialog.Content className="dialogue__content">
          {mode === "login" ? (
            <LoginView onSwitch={() => setMode("signup")} />
          ) : (
            <SignupView onSwitch={() => setMode("login")} />
          )}
          <Dialog.Close asChild>
            <button className="dialogue__cancel" aria-label="Close">
              <AiOutlineClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function loginAsGuest() {
  signInAnonymously(auth).catch((error) => {
    console.error("Guest login failed:", error);
  });
}

function LoginView({ onSwitch }: { onSwitch: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    form?: string;
  }>({});

  const [loading, setLoading] = useState(false);

  const [resetSent, setResetSent] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  async function handlePasswordReset() {
    if (!email) {
      setErrors({ email: "Enter your email to reset your password" });
      return;
    }

    try {
      setResetLoading(true);
      setErrors({});
      await sendPasswordResetEmail(auth, email);
      setResetSent(true);
    } catch (err: any) {
      setErrors({
        form:
          err.code === "auth/user-not-found"
            ? "No account found with this email"
            : "Failed to send reset email. Try again.",
      });
    } finally {
      setResetLoading(false);
    }
  }

  async function handleGoogleLogin() {
    try {
      if (auth.currentUser?.isAnonymous) {
        await linkWithPopup(auth.currentUser, googleProvider);
      } else {
        await signInWithPopup(auth, googleProvider);
      }
    } catch (err) {
      setErrors({ form: "Google login failed. Please try again." });
    }
  }

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // success – dialog closes via auth state listener
      })
      .catch((err) => {
        const firebaseErrors: typeof errors = {};

        switch (err.code) {
          case "auth/invalid-email":
            firebaseErrors.email = "Invalid email address";
            break;
          case "auth/user-not-found":
          case "auth/wrong-password":
            firebaseErrors.form = "Incorrect email or password";
            break;
          case "auth/too-many-requests":
            firebaseErrors.form =
              "Too many failed attempts. Please try again later.";
            break;
          default:
            firebaseErrors.form = "Something went wrong. Please try again.";
        }

        setErrors(firebaseErrors);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const clearFieldError = (field: "email" | "password") => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <>
      <Dialog.Title className="dialogue__title">
        Log in to Summarist
      </Dialog.Title>
      <Dialog.Description className="sr-only">
        Log in to access your Summarist account.
      </Dialog.Description>

      <div className="auth__wrapper">
        <button className="btn btn__guest" onClick={loginAsGuest}>
          <FaUser className="btn__guest--icon" />
          <p className="btn__para">Login as a Guest</p>
        </button>

        <div className="auth__separator">
          <span className="auth__separator--text">or</span>
        </div>

        <button className="btn btn__google" onClick={handleGoogleLogin}>
          <figure className="btn__google--figure">
            <Image
              src="/images/google.png"
              alt="Google logo"
              width={40}
              height={40}
            />
          </figure>
          <p className="btn__para">Login with Google</p>
        </button>

        <div className="auth__separator">
          <span className="auth__separator--text">or</span>
        </div>

        <form className="dialogue__form" onSubmit={login}>
          <input
            className={`dialogue__input ${errors.email ? "input--error" : ""}`}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearFieldError("email");
            }}
            required
          />
          {errors.email && (
            <p className="auth__error" aria-live="polite">
              {errors.email}
            </p>
          )}

          <input
            className={`dialogue__input ${
              errors.password ? "input--error" : ""
            }`}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              clearFieldError("password");
            }}
            required
          />
          {errors.password && (
            <p className="auth__error" aria-live="polite">
              {errors.password}
            </p>
          )}

          {errors.form && (
            <p className="auth__error auth__error--form" aria-live="polite">
              {errors.form}
            </p>
          )}

          <button type="submit" className="btn btn__green" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      <button
        type="button"
        className="btn auth__forgot--password"
        onClick={handlePasswordReset}
        disabled={resetLoading || resetSent}
      >
        {resetSent
          ? "Reset email sent ✓"
          : resetLoading
          ? "Sending reset email..."
          : "Forgot your password?"}
      </button>

      <button className="auth__switch--btn" onClick={onSwitch}>
        Don't have an account?
      </button>
    </>
  );
}

function SignupView({ onSwitch }: { onSwitch: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
    form?: string;
  }>({});

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleGoogleSignup() {
    try {
      if (auth.currentUser?.isAnonymous) {
        await linkWithPopup(auth.currentUser, googleProvider);
      } else {
        await signInWithPopup(auth, googleProvider);
      }

      setSuccess(true);
      setTimeout(() => onSwitch(), 1200);
    } catch (err: any) {
      setErrors({
        form: "Google sign-up failed. Please try again.",
      });
    }
  }

  function signUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    (async () => {
      try {
        if (auth.currentUser?.isAnonymous) {
          const credential = EmailAuthProvider.credential(email, password);
          await linkWithCredential(auth.currentUser, credential);
        } else {
          await createUserWithEmailAndPassword(auth, email, password);
        }

        setSuccess(true);
        setTimeout(() => onSwitch(), 1200);
      } catch (err: any) {
        const firebaseErrors: typeof errors = {};

        switch (err.code) {
          case "auth/email-already-in-use":
            firebaseErrors.email = "An account with this email already exists";
            break;
          case "auth/invalid-email":
            firebaseErrors.email = "Please enter a valid email address";
            break;
          case "auth/weak-password":
            firebaseErrors.password = "Password is too weak";
            break;
          default:
            firebaseErrors.form = "Something went wrong. Please try again.";
        }

        setErrors(firebaseErrors);
      } finally {
        setLoading(false);
      }
    })();
  }

  const clearFieldError = (field: "email" | "password" | "confirmPassword") => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <>
      <Dialog.Title className="dialogue__title">
        Sign up to Summarist
      </Dialog.Title>

      <Dialog.Description className="sr-only">
        Sign up to create your Summarist account.
      </Dialog.Description>

      <div className="auth__wrapper">
        <button className="btn btn__google" onClick={handleGoogleSignup}>
          <figure className="btn__google--figure">
            <Image
              src="/images/google.png"
              alt="Google logo"
              width={40}
              height={40}
            />
          </figure>
          <p className="btn__para">Sign up with Google</p>
        </button>

        <div className="auth__separator">
          <span className="auth__separator--text">or</span>
        </div>

        <form className="dialogue__form" onSubmit={signUp}>
          <input
            className={`dialogue__input ${errors.email ? "input--error" : ""}`}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearFieldError("email");
            }}
            required
          />
          {errors.email && (
            <p className="auth__error" aria-live="polite">
              {errors.email}
            </p>
          )}

          <input
            className={`dialogue__input ${
              errors.password ? "input--error" : ""
            }`}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              clearFieldError("password");
            }}
            required
          />
          {errors.password && (
            <p className="auth__error" aria-live="polite">
              {errors.password}
            </p>
          )}

          <input
            className={`dialogue__input ${
              errors.confirmPassword ? "input--error" : ""
            }`}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              clearFieldError("confirmPassword");
            }}
            required
          />
          {errors.confirmPassword && (
            <p className="auth__error" aria-live="polite">
              {errors.confirmPassword}
            </p>
          )}

          {errors.form && (
            <p className="auth__error auth__error--form" aria-live="polite">
              {errors.form}
            </p>
          )}

          <button
            type="submit"
            className="btn btn__green"
            disabled={loading || success}
          >
            {success
              ? "Account created!"
              : loading
              ? "Creating account..."
              : "Sign up"}
          </button>
        </form>
      </div>

      <button className="auth__switch--btn" onClick={onSwitch}>
        Already have an account?
      </button>
    </>
  );
}
