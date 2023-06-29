"use client";
import { ProductType } from "@/types/sanityTypes";
import React from "react";
import ProductCard from "../ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

interface IProps {
  title: string;
  products: ProductType[];
}
function FeaturedProducts({ title, products }: IProps) {
  return (
    <div className="py-10">
      <h3 className="mb-4 font-heading text-2xl">{title}</h3>

      <div className="">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // className="cursor-pointer"
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FeaturedProducts;
