"use client";
import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import LaptopAnimation from "@/assets/laptop-animation.json";

function LottieAnimation() {
  const laptopRef = React.useRef<LottieRefCurrentProps>(null);
  return (
    <div className="w-full max-w-3xl">
      <Lottie
        lottieRef={laptopRef}
        animationData={LaptopAnimation}
        loop={true}
      />
    </div>
  );
}

export default LottieAnimation;
