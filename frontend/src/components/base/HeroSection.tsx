import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-gray-50 to-white md:px-20">
      <div className="flex items-center justify-center w-full max-w-5xl mx-auto">
        <div className="w-full md:w-1/2 md:pr-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 md:mb-8">
            Connect Instantly, Chat Securely.
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12">
            Pulse makes it effortless to create secure chat links and start
            conversations in seconds.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="flex items-center gap-[20px] select-none mx-auto md:mx-0"
            >
              Start Chatting
            </Button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <img
            src="/images/hero_img.svg"
            alt="Illustration"
            className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
