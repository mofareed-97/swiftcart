import Filters from "@/components/products/Filters";
import ProductCard from "@/components/ProductCard";
import { z } from "zod";
import { ProductsParamsType } from "@/lib/productsValidation";
import { getAllProducts, getCategories } from "@/app/_actions/products";
import { GetProductsValidatorSchema } from "@/lib/validation/product";
import Banner from "@/components/home/Banner";
import bannerImage from "@/assets/images/products-banner-1.png";

interface CategoryPageProps {
  params: any;
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export const fetchCache = "force-no-store";
// input: GetProductsValidatorSchema
interface PrdouctsParams {
  params: any;
  searchParams: GetProductsValidatorSchema;
}

export default async function Products({
  params,
  searchParams,
}: PrdouctsParams) {
  const products = await getAllProducts({
    page: searchParams.page || "1",
    categories: searchParams.categories,
  });
  const categories = await getCategories();

  return (
    <div className="">
      <div className="mx-auto  max-w-[1500px] pb-20">
        <Banner
          description={"Grab Upto 50% Off On Selected Headphone"}
          image={bannerImage}
        />

        <div className="mt-10 flex min-h-screen gap-10">
          <Filters categories={categories} />
          {/* Products */}
          <div className="flex-1  ">
            <div className="grid grid-cols-4 gap-4">
              {products.results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
