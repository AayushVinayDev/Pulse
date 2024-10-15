import FeatureSection from "@/components/base/FeatureSection";
import Footer from "@/components/base/Footer";
import HeroSection from "@/components/base/HeroSection";
import Navbar from "@/components/base/Navbar";
import UserReviews from "@/components/base/UserReviews";

import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";
import { BlurFade } from "@/components/ui/blur-fade";
import MarqueeSection from "@/components/base/MarqueeSection";
import Feature1 from "@/components/base/Feature1";
import Feature2 from "@/components/base/Feature2";

const BLUR_FADE_DELAY = 0.04;

export default async function Home() {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <>
      <div className="flex flex-col-reverse md:flex-col">
        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Navbar user={session?.user ?? null} />
        </BlurFade>
      </div>

      <div className="mt-8 md:mt-[81px] flex flex-col gap-12 md:gap-[150px] px-4 md:px-[100px]">
        {/* Hero Section */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <HeroSection />
          {/* Marquee section*/}
          <MarqueeSection />
          {/* Feature List*/}
         
        </BlurFade>

        {/* Features Section */}
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <FeatureSection />
           {/* Feature 1*/}
          <Feature1 />
          {/* Feature 2*/}
          <Feature2 />
        </BlurFade>
      </div>

      <div className="mt-8 md:mt-[81px] flex flex-col">
        {/* User Reviews Section */}
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <UserReviews />
        </BlurFade>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
