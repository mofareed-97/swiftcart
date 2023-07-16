"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Heart } from "lucide-react";
import { Star } from "lucide-react";
import Link from "next/link";
import useCart from "@/hooks/useCart";
import { ProductType } from "@/types";

function ProductCard({ product }: { product: ProductType }) {
  const addToCart = useCart((state) => state.addToCart);
  return (
    <div className="flex flex-col border bg-background shadow-sm">
      <div className="bg_product relative h-80 w-full border-b">
        <div className="absolute right-2 top-2 z-10  flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white ">
          <Button className="hover:bg-gray-200" variant={"ghost"}>
            <Heart className="h-4 w-4 text-black" />
          </Button>
        </div>
        <Image
          src={product.mainImage || product.images[0].url}
          alt={`${product.name} image`}
          className=" object-cover"
          fill
          sizes="25vw"
        />
      </div>

      <div className="flex flex-1 flex-col  px-4  pt-6">
        <div className="flex justify-between gap-4">
          {/* <Link className="text-start" href={`/products/${product.slug}`}>
            <p className="line-clamp-2 text-sm font-medium hover:underline">
              {product.name}
            </p>
          </Link> */}
          <button
            className="text-start"
            onClick={() => {
              window.location.href = `/products/${product.slug}`;
            }}
          >
            <p className="line-clamp-2 text-sm font-medium hover:underline">
              {product.name}
            </p>
          </button>
          <span className="font-bold">${product.price}</span>
        </div>

        <div className="flex h-full flex-col items-start justify-end py-4">
          <div className="mb-4 flex items-center gap-1 pl-1">
            <button>
              <Star className="h-4 w-4 hover:fill-green-500" />
            </button>
            <button>
              <Star className="h-4 w-4 hover:fill-green-500" />
            </button>
            <button>
              <Star className="h-4 w-4 hover:fill-green-500" />
            </button>
            <button>
              <Star className="h-4 w-4 hover:fill-green-500" />
            </button>
            <button>
              <Star className="h-4 w-4 hover:fill-green-500" />
            </button>
          </div>
          <Button
            onClick={() => addToCart({ ...product, qty: 1 })}
            className="rounded-full text-sm"
            variant={"default"}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
