import Filters from "@/components/products/Filters";
import { getAllProducts } from "../../../../sanity/sanity-utils";
import ProductCard from "@/components/ProductCard";
import { z } from "zod";
import { ProductsParamsType } from "@/lib/productsValidation";

interface CategoryPageProps {
  params: any;
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

interface ProductsParams {
  params: any;
  searchParams: ProductsParamsType;
}

export default async function Products({
  params,
  searchParams,
}: ProductsParams) {
  const products = await getAllProducts(searchParams);

  return (
    <div className="">
      <div className="mx-auto  max-w-[1500px] py-20">
        <div className="mb-20">{/* <AddProduct /> */}</div>
        <div className="flex min-h-screen gap-10">
          <Filters />
          {/* Products */}
          <div className="flex-1  ">
            <div className="grid grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
