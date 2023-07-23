import { getAllProducts, getSingleProduct } from "@/app/_actions/products";
import ProductDetails from "@/components/details/ProductDetails";
import FeaturedProducts from "@/components/features/FeaturedProducts";

interface IProps {
  params: {
    productId: string;
  };
}
export const fetchCache = "force-no-store";

export default async function ProductDetailsPage({ params }: IProps) {
  const product = await getSingleProduct(params.productId);
  const familiarProducts = await getAllProducts({
    page: "1",
    categories: product.category.slug,
  });
  return (
    <div className="">
      <div className="mx-auto max-w-[1500px] py-20">
        <ProductDetails product={product} />

        <div className="">
          <FeaturedProducts
            title="Familiar Products"
            products={familiarProducts.results}
          />
        </div>
      </div>
    </div>
  );
}
