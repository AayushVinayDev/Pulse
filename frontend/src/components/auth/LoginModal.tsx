"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import ShimmerButton from "../ui/shimmer-button";

export default function LoginModal() {
  const handleLogin = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
      redirect: true,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild >
        <ShimmerButton > Get started </ShimmerButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to Pulse</DialogTitle>
          <DialogDescription>
            Pulse: Your Instant Messaging Hub, Securely Connected for Real-Time
            Conversations.
          </DialogDescription>
        </DialogHeader>
        <Button variant="outline" onClick={handleLogin}>
          <Image
            src="/images/google.png"
            className="mr-4"
            width={25}
            height={25}
            alt="google_logo"
          />
          Continue with Google
        </Button>
      </DialogContent>
    </Dialog>
  );
}
