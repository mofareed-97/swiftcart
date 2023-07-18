import { CategoryType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Categories({ categories }: { categories: CategoryType[] }) {
  return (
    <div className="grid grid-cols-6 gap-6 py-10">
      {categories.map((category) => {
        return (
          <Link
            key={category.id}
            href={`/products?categories=${category.slug}`}
          >
            <div
              className="group relative h-64 cursor-pointer overflow-hidden rounded-lg 
            "
            >
              <div className="absolute left-0 top-0 z-10 h-20 w-full bg-gradient-to-b from-black/50"></div>
              <p className="absolute z-20 w-full pt-6 text-center text-lg font-bold text-white">
                {category.name}
              </p>
              <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
              <div className="relative h-full w-full overflow-hidden">
                {category.categoryImage && category.categoryImage.length > 0 ? (
                  <Image
                    src={category.categoryImage[0].url}
                    className="h-full w-full object-cover duration-500 group-hover:scale-110"
                    alt={category.name + " Category"}
                    fill
                    sizes="25vw"
                  />
                ) : null}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Categories;
