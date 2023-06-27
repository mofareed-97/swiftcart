import React from "react";
import { ModeToggle } from "./theme-toggle";
import { NavigationMenuDemo } from "./main-nav";
import { Icons } from "../icons";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";
import { Cart } from "./Cart";

function PageHeader() {
  return (
    <header className="sticky top-0 z-30 border-b  bg-background">
      <div className="mx-auto flex max-w-[1500px]  items-center justify-between px-5 py-4 lg:px-2">
        <div className="flex items-center gap-5">
          <Link href={"/"}>
            <Icons.logo className=" h-7 w-7 fill-zinc-700 dark:fill-white" />
          </Link>

          <NavigationMenuDemo />
        </div>

        <div className="flex items-center gap-1">
          <Button variant={"ghost"}>
            <User className="h-5 w-5" />
          </Button>
          <Cart />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
