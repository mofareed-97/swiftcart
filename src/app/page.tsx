import Image from "next/image";
import { getCategories } from "../../sanity/sanity-utils";
import { CategoryType } from "@/types/sanityTypes";

export default async function Home() {
  const categories: CategoryType[] = await getCategories();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
        An example app built using Next.js 13 server components.
      </h1>
      {categories.map((category) => {
        return (
          <div className="" key={category._id}>
            {category.name || "hey"}
            <div className="relative h-96 w-96">
              <Image
                src={category.image}
                className="h-full w-full object-cover"
                alt={category.name + " Category"}
                fill
              />
            </div>
          </div>
        );
      })}
    </main>
  );
}
