import Image from "next/image";
import {
  getAllFeaturedProducts,
  getBanner,
  getCategories,
} from "../../../sanity/sanity-utils";
import { BannerType, CategoryType } from "@/types/sanityTypes";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/features/FeaturedProducts";

export default async function Home() {
  const categories = await getCategories();
  const banner: BannerType[] = await getBanner();
  const featured = await getAllFeaturedProducts();

  return (
    <main className="min-h-screen">
      <div className="mx-auto  max-w-[1500px] ">
        {/* <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          An example app built using Next.js 13 server components.
        </h1> */}
        <Banner description={banner[0].description} image={banner[0].image} />
        <Categories categories={categories} />

        <FeaturedProducts
          title="Most Selling Products"
          products={featured.mostSellingProducts}
        />

        <FeaturedProducts title="Best Deals" products={featured.bestDeals} />
      </div>
    </main>
  );
}
