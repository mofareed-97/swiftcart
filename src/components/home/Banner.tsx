import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface IProps {
  image: string | StaticImageData;
  description: string;
}
function Banner({ image, description }: IProps) {
  return (
    <div className="relative flex h-64 w-full justify-around overflow-hidden bg-red-100">
      <div className="flex flex-col justify-center gap-4">
        <h2 className="max-w-[400px]  text-4xl font-medium capitalize text-black">
          {description}
        </h2>
        <Button className="w-fit rounded-full bg-green-900 px-8 py-4 text-white hover:bg-green-800">
          Buy Now
        </Button>
      </div>

      <Image
        src={image}
        alt=""
        height={256}
        width={480}
        // fill
      />
    </div>
  );
}

export default Banner;
