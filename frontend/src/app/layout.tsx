import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import SessionProvider from "@/providers/SessionProvider";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "700"]})

export const metadata: Metadata = {
  title: "Pulse",
  description: "Converse at Lightning speed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider>
        <body
           className={`${inter.className} w-80% mx-auto`}
      >
          <Toaster richColors duration={10000} />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
