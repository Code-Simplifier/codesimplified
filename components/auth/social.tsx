"use client";

import { signIn } from "next-auth/react";
import { FiGithub } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="w-full" onClick={() => onClick("google")}>
        <FaGoogle className="h-5 w-5" />
      </Button>
      <Button size="lg" className="w-full" onClick={() => onClick("github")}>
        <FiGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};