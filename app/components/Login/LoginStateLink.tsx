"use client";
import { useModal } from "@/app/context/ModalContext"; 
import { useAuth } from "@/app/context/AuthContext"; 
import { auth } from "@/firebase"; 
import { signOut } from "firebase/auth";

export default function LoginStateLink() {
  const { openLogin } = useModal();
  function logout() {
    signOut(auth);
  }
  const { user, loading } = useAuth();

  const isGuest = user?.isAnonymous;

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
