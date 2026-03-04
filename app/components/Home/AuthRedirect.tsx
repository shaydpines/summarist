"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

type AuthRedirectProps = {
  redirectTo: string;
};

export default function AuthRedirect({ redirectTo }: AuthRedirectProps) {
  const { user, loading } = useAuth(); // assuming your context exposes loading
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace(redirectTo);
    }
  }, [user, loading, redirectTo, router]);

  return null;
}