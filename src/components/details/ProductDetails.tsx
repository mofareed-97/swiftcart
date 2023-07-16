"use client";
import { Box, Minus, Plus, Star, Truck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import useCart from "@/hooks/useCart";
import { handleCheckout } from "@/lib/checkoutHandler";
import { ProductType } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface IProps {
  product: ProductType;
}
function ProductDetails({ product }: IProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [counter, setCounter] = useState(1);

  const addToCart = useCart((state) => state.addToCart);

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-10">
        <div className="flex h-[500px] gap-4">
          <div className="flex w-24 flex-col gap-4">
            {product.images.map((el, i) => (
              <div
                key={el.id}
                className="bg_product relative h-28 cursor-pointer"
                onClick={() => setActiveImage(i)}
              >
                <Image
                  src={el.url}
                  alt={`${product.name + " " + i} image`}
                  className={`border object-cover ${
                    activeImage == i ? "border-blue-500" : ""
                  }`}
                  sizes="25vw"
                  fill
                />
              </div>
            ))}
          </div>
          {/* <div className="bg_product relative mb-10 h-full w-full"> */}
          <div className="bg_product relative mb-10 h-[500px] w-[350px] ">
            <Image
              src={product.images[activeImage].url}
              className="object-cover"
              fill
              alt="product"
              sizes="25vw"
            />
          </div>
        </div>

        <div className="">
          <h1 className="mb-3 font-heading text-xl ">{product.name}</h1>
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

          <div className="border-b border-t py-4">
            <h2 className="text-3xl font-medium">${product.price}</h2>
          </div>

          <div className="flex gap-6 py-4">
            <div className="flex w-24 items-center justify-center rounded-lg bg-gray-200 text-black">
              <Button
                variant={"link"}
                onClick={() => {
                  if (counter > 1) {
                    setCounter((prevCount) => prevCount - 1);
                  }
                }}
              >
                <Minus className="h-3 w-3 text-black" />
              </Button>

              <span className="flex-1 text-xs">{counter}</span>
              <Button
                variant={"link"}
                onClick={() => setCounter((prevCount) => prevCount + 1)}
              >
                <Plus className="h-3 w-3 text-black" />
              </Button>
            </div>

            <p className="text-xs">
              Only{" "}
              <span className="font-bold text-yellow-500">
                ({product.countInStock} items)
              </span>{" "}
              Left <br /> Dont miss it!
            </p>
          </div>

          <div className="my-4 flex items-center gap-2">
            <Button
              // onClick={() => handleCheckout([{ ...product, qty: counter }])}
              className="px-10"
            >
              Buy Now
            </Button>
            <Button
              onClick={() => addToCart({ ...product, qty: counter })}
              variant={"outline"}
            >
              Add to Cart
            </Button>
          </div>
          {/* <div className=" py-4">
            <h4 className="mb-4 font-heading text-lg">Overview</h4>
            <p className="max-w-3xl whitespace-pre-line text-sm font-medium text-muted-foreground">
              {product.description}
            </p>
          </div> */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                Overview
              </AccordionTrigger>
              <AccordionContent className="max-w-3xl whitespace-pre-line text-sm font-medium text-muted-foreground">
                {product.description}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="border-l px-4">
          <div className=" border">
            <div className="flex gap-3 border-b p-5">
              <Truck className="h-6 w-6 text-yellow-500" />
              <div className="">
                <h4 className="mb-1 text-sm font-medium">Free Delivery</h4>
                <p className="text-xs text-muted-foreground underline underline-offset-4">
                  Enter your Postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex gap-3  p-5">
              <Box className="h-6 w-6 text-yellow-500" />
              <div className="">
                <h4 className="mb-1 text-sm font-medium">Retrun Delivery</h4>
                <p className="text-xs text-muted-foreground">
                  Free 30days Delivery Returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-14"></div>
    </div>
  );
}

export default ProductDetails;
