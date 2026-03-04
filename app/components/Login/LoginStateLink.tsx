"use client";

import { useModal } from "@/app/context/ModalContext";
import { useAuth } from "@/app/context/AuthContext";

export default function LoginStateLink() {
  const { openLogin } = useModal();
  const { user, loading, logout } = useAuth();

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
