import { CategoryType } from "@/types/sanityTypes";
import Image from "next/image";
import React from "react";

function Categories({ categories }: { categories: CategoryType[] }) {
  return (
    <div className="grid grid-cols-6 gap-6 py-10">
      {categories.map((category) => {
        return (
          <div
            className="group relative h-64 cursor-pointer overflow-hidden rounded-lg 
            "
            key={category._id}
          >
            <div className="absolute left-0 top-0 z-10 h-20 w-full bg-gradient-to-b from-black/50"></div>
            <p className="absolute z-20 w-full pt-6 text-center text-lg font-bold text-white">
              {category.name}
            </p>
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={category.image}
                className="h-full w-full object-cover duration-500 group-hover:scale-110"
                alt={category.name + " Category"}
                fill
                sizes="25vw"
              />
            </div>
          </div>
        );
      })}

      <div className="relative cursor-pointer" key={categories[0]._id}>
        <p className="absolute z-20 w-full pt-6 text-center text-lg font-bold text-white">
          {categories[0].name}
        </p>
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
        <div className="relative h-64 w-full overflow-hidden rounded-lg">
          <Image
            src={categories[0].image}
            className="h-full w-full object-cover"
            alt={categories[0].name + " Category"}
            fill
          />
        </div>
      </div>
    </div>
  );
}

export default Categories;
