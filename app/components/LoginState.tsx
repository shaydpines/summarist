"use client";
import { useModal } from "../context/ModalContext";
import { useAuth } from "../context/AuthContext";
import { auth } from "../../firebase.js";
import { signOut } from "firebase/auth";

export default function LoginState() {
  const { openLogin } = useModal();
  function logout() {
    signOut(auth);
  }
  const { user, loading } = useAuth();

  return (
    <>
      {!loading &&
        (user ? (
          <div onClick={logout}>Logout</div>
        ) : (
          <div onClick={openLogin}>Login</div>
        ))}
    </>
  );
}
