import { getProductDetails } from "@/../sanity/sanity-utils";
import ProductDetails from "@/components/details/ProductDetails";

interface IProps {
  params: {
    productId: string;
  };
}
export default async function ProductDetailsPage({ params }: IProps) {
  const product = await getProductDetails(params.productId);

  return (
    <div className="">
      <div className="mx-auto max-w-[1500px] py-20">
        <ProductDetails product={product} />
      </div>
    </div>
  );
}
