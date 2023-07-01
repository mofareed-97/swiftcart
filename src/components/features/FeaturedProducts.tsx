"use client";
import { ProductType } from "@/types/sanityTypes";
import React from "react";
import ProductCard from "../ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import SliderCards from "../SliderCards";

interface IProps {
  title: string;
  products: ProductType[];
}
function FeaturedProducts({ title, products }: IProps) {
  return (
    <div className="py-10">
      <h3 className="mb-4 font-heading text-2xl">{title}</h3>

      <div className="">
        <SliderCards products={products} />
      </div>
    </div>
  );
}

export default FeaturedProducts;
