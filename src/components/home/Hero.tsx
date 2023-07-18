"use client";
import React from "react";
import LottieAnimation from "./LottieAnimation";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Hero() {
  return (
    <div className="flex h-[70vh] items-center border-b">
      <div className="">
        {/* <h1 className="mb-6 font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"> */}
        <h1 className="mb-5 font-heading text-3xl sm:text-5xl md:text-6xl">
          Discover the Art of Online Shopping With
          <br /> SwiftCart
        </h1>

        <p className="mb-6 max-w-2xl text-muted-foreground ">
          Prepare to be amazed by our exceptional range of products that are
          bound to elevate your shopping experience to new heights. We pride
          ourselves on offering a meticulously curated selection of the finest
          goods that cater to your every need. From cutting-edge electronics
          that redefine technological innovation to stylish fashion pieces that
          effortlessly enhance your wardrobe, we have it all.
        </p>
        <Link href={"/products"} className={cn(buttonVariants({}))}>
          Shop Now
        </Link>
      </div>
      <LottieAnimation />
    </div>
  );
}

export default Hero;
