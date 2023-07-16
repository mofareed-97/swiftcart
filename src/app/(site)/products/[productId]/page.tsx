import { getSingleProduct } from "@/app/_actions/products";
import ProductDetails from "@/components/details/ProductDetails";

interface IProps {
  params: {
    productId: string;
  };
}
export const fetchCache = "force-no-store";

export default async function ProductDetailsPage({ params }: IProps) {
  const product = await getSingleProduct(params.productId);

  return (
    <div className="">
      <div className="mx-auto max-w-[1500px] py-20">
        <ProductDetails product={product} />
      </div>
    </div>
  );
}
