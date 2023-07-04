"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useCart, { CartActions, CartState, ProductQty } from "@/hooks/useCart";
import { Delete, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "../ui/scroll-area";
import getStripe from "@/lib/getStripe";
import Stripe from "stripe";
import { handleCheckout } from "@/lib/checkoutHandler";

export function Cart() {
  const [cartItems, setCartItems] = useState<CartState & CartActions>();
  const cartStore = useCart();

  useEffect(() => {
    setCartItems(cartStore);
  }, [cartStore]);

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
                <div key={product._id} className="" suppressHydrationWarning>
                  <div className="flex justify-between py-2 ">
                    <div className="flex gap-1">
                      <div className="bg_product relative h-14 w-14">
                        <Image
                          src={product.mainImage}
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
                        <span className="">${product.price}</span>
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
              handleCheckout(cartItems.cart);
            }
          }}
          disabled={cartItems && cartItems.cart.length < 1}
          className="absolute bottom-0 left-0 w-full  py-2 text-xs"
        >
          Checkout ( ${cartItems?.totalPrice} )
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
