"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useCart, { CartActions, CartState, ProductQty } from "@/hooks/useCart";
import { Delete, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import Stripe from "stripe";
import { env } from "@/env.mjs";
import { toast } from "react-hot-toast";
import { Icons } from "../icons";

export function Cart() {
  const [cartItems, setCartItems] = useState<CartState & CartActions>();
  const [isLoading, setIsLoading] = useState(false);
  const cartStore = useCart();

  useEffect(() => {
    setCartItems(cartStore);
  }, [cartStore]);

  const checkoutHandler = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${env.NEXT_PUBLIC_SERVER_URL}/api/checkout`,
        {
          method: "POST",
          body: JSON.stringify(
            cartItems?.cart.map((product) => ({
              id: product.id,
              qty: product.qty,
            }))
          ),
        }
      );

      // console.log(response);

      const data = await response.json();

      if (!data.url) {
        setIsLoading(false);
        toast.error("Something went wrong");
        throw new Error("Something went wrong");
      }

      window.location = data.url;
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative" variant="ghost">
          <div className="absolute -top-0 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-xs text-background">
            <span className="pl-[1px]">{cartItems?.totalItems || 0}</span>
          </div>
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative h-64 w-64 pb-4">
        <ScrollArea className="h-full w-full">
          <DropdownMenuLabel>Cart Items</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="px-3">
            {cartItems?.cart.map((product) => {
              return (
                <div key={product.id} className="" suppressHydrationWarning>
                  <div className="flex justify-between py-2 ">
                    <div className="flex gap-1">
                      <div className="bg_product relative h-14 w-14">
                        <Image
                          src={product.mainImage || product.images[0].url}
                          alt=""
                          fill
                          sizes="25vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="text-[10px]">
                        <p className="mb-1 line-clamp-2 max-w-[100px] font-bold">
                          {product.name}
                        </p>
                        <span className="">${product.priceInt}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-3 text-xs">
                      <span>x{product.qty}</span>
                      <button onClick={() => cartItems.removeFromCart(product)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                </div>
              );
            })}
          </DropdownMenuGroup>
        </ScrollArea>
        <Button
          onClick={() => {
            if (cartItems && cartItems?.cart.length > 0) {
              checkoutHandler();
            }
          }}
          disabled={(cartItems && cartItems.cart.length < 1) || isLoading}
          className="absolute bottom-0 left-0 w-full  py-2 text-xs"
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-3 w-3 animate-spin" />
          ) : null}{" "}
          Checkout ( ${cartItems?.totalPrice} )
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
