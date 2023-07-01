import { getProductDetails } from "@/../sanity/sanity-utils";
import { Star } from "lucide-react";
import Image from "next/image";

interface IProps {
  params: {
    productId: string;
  };
}
export default async function ProductDetails({ params }: IProps) {
  const product = await getProductDetails(params.productId);

  return (
    <div className="">
      <div className="mx-auto max-w-[1500px] py-20">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex h-[500px] gap-4">
            <div className="flex w-32 flex-col justify-between ">
              {product.images.map((el, i) => (
                <div
                  key={el}
                  className="bg_product relative h-24  cursor-pointer"
                >
                  <Image
                    src={el}
                    alt={`${product.name + " " + i} image`}
                    className="object-cover "
                    fill
                  />
                </div>
              ))}
            </div>
            <div className="bg_product relative mb-10 h-full w-full">
              <Image
                src={product.mainImage}
                className="object-contain"
                fill
                alt="product"
              />
            </div>
          </div>
          <div className="">
            <h1 className="mb-3 font-heading text-xl ">{product.name}</h1>
            <div className="mb-4 flex items-center gap-1 pl-1">
              <button>
                <Star className="h-4 w-4 hover:fill-green-500" />
              </button>
              <button>
                <Star className="h-4 w-4 hover:fill-green-500" />
              </button>
              <button>
                <Star className="h-4 w-4 hover:fill-green-500" />
              </button>
              <button>
                <Star className="h-4 w-4 hover:fill-green-500" />
              </button>
              <button>
                <Star className="h-4 w-4 hover:fill-green-500" />
              </button>
            </div>
            <h2 className="text-xl">${product.price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
