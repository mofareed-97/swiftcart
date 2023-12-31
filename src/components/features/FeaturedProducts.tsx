"use client";
import React from "react";
import ProductCard from "../ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import SliderCards from "../SliderCards";
import { ProductType } from "@/types";

interface IProps {
  title: string;
  products: ProductType[];
}
function FeaturedProducts({ title, products }: IProps) {
  return (
    <div className="py-10">
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>

      <div className="">
        <SliderCards products={products} />
      </div>
    </div>
  );
}

export default FeaturedProducts;
