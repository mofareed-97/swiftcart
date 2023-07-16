"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";
import { ProductType } from "@/types";

function SliderCards({ products }: { products: ProductType[] }) {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
    >
      <SlideArrowsButton />
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderCards;

function SlideArrowsButton() {
  const swiper = useSwiper();

  return (
    <>
      <Button
        variant="default"
        className="absolute left-0 top-2/4 z-10 flex h-10 w-10 -translate-y-2/4 items-center justify-center rounded-full border  bg-white p-0 text-black hover:bg-gray-100 "
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeft />
      </Button>
      <Button
        variant="default"
        className="absolute right-0 top-2/4 z-10 flex h-10 w-10 -translate-y-2/4 items-center justify-center rounded-full border  bg-white p-0 text-black hover:bg-gray-100 "
        onClick={() => swiper.slideNext()}
      >
        <ChevronRight />
      </Button>
    </>
  );
}
