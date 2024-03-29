"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { primary_font } from "./fonts";
import { useCurrentUser } from "@/hooks/use-current-user";
import HomePage from "@/components/home";

export default function Home() {
  const user = useCurrentUser();
  return (
    <main className="flex flex-col items-center justify-center">
      <HomePage />
    </main>
  );
}
