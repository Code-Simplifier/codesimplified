import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { primary_font } from "./fonts";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="space-y-6 text-center flex flex-col">
        <h1 className={cn(primary_font.className, "text-4xl text-white")}>
          Auth
        </h1>
        <LoginButton>
          <Button>Login</Button>
        </LoginButton>
        <Button>Register</Button>
      </div>
    </main>
  );
}
