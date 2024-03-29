import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/sonner";
import { primary_font } from "./fonts";

import "./globals.css";
import Header from "../components/navigation/header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={primary_font.className}>
          <Header />
          <br /> <br /> <br />
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
