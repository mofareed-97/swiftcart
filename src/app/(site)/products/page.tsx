import Filters from "@/components/products/Filters";
import ProductCard from "@/components/ProductCard";
import { z } from "zod";
import { ProductsParamsType } from "@/lib/productsValidation";
import { getAllProducts, getCategories } from "@/app/_actions/products";
import { GetProductsValidatorSchema } from "@/lib/validation/product";

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
      <div className="mx-auto  max-w-[1500px] py-20">
        <div className="mb-20">{/* <AddProduct /> */}</div>
        <div className="flex min-h-screen gap-10">
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
