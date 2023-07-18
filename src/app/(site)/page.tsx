import Image from "next/image";

import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/features/FeaturedProducts";
import {
  getBestDealsProducts,
  getCategories,
  getFeaturedProducts,
} from "../_actions/products";
import Hero from "@/components/home/Hero";

export const fetchCache = "force-no-store";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();
  const bestDealsProducts = await getBestDealsProducts();
  const categories = await getCategories();

  return (
    <main className="min-h-screen">
      <div className="mx-auto  max-w-[1500px] ">
        <Hero />

        {/* <Banner description={banner[0].description} image={banner[0].image} />
         */}
        <Categories categories={categories} />
        <FeaturedProducts
          title="Most Selling Products"
          products={bestDealsProducts}
        />

        <FeaturedProducts
          title="Featured Products"
          products={featuredProducts}
        />
      </div>
    </main>
  );
}
