import Image from "next/image";

import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/features/FeaturedProducts";
import { getFeaturedProducts } from "../_actions/products";

export const fetchCache = "force-no-store";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <main className="min-h-screen">
      <div className="mx-auto  max-w-[1500px] ">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          An example app built using Next.js 13 server components.
        </h1>
        {/* <Banner description={banner[0].description} image={banner[0].image} />
        <Categories categories={categories} />

        <FeaturedProducts
          title="Most Selling Products"
          products={featured.mostSellingProducts}
        /> */}

        <FeaturedProducts
          title="Best Deals"
          products={featuredProducts.results}
        />
      </div>
    </main>
  );
}
