"use client";
import localFont from "next/font/local";
import Lottie from "lottie-react";
import animationData from "@/lottie/medal.json";
import newbg from "@/lottie/newbg.json";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center top-0 flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className,
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Lottie
            animationData={animationData}
            className="h-7 w-7 mr-2" // Adjust the size and styling as needed
          />
          best task management tool
        </div>
        <div className="flex items-center justify-center mt-2">
          <Lottie animationData={newbg} className="h-64 w-80 mb-4" />
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          TaskFlow helps the team
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          to be productive
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className,
        )}
      >
        Elevate your productivity with an intuitive Kanban-inspired experience,
        seamlessly orchestrating your projects and tasks on a dynamic canvas of
        efficiency.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get TaskFlow for free</Link>
      </Button>
    </div>
  );
};

export default LandingPage;
