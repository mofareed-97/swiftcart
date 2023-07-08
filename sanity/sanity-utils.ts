import { createClient, groq } from "next-sanity";
import sanityConfig from "./config";
import { CategoryType, ProductType, featuredTypes } from "@/types/sanityTypes";
import { ProductsParamsType } from "@/lib/productsValidation";

export const client = createClient(sanityConfig);
export async function getCategories(): Promise<CategoryType[]> {
  return client.fetch(
    groq`*[_type == "category"]{
        _id,
        _createdAt,
        name,
        "slug":slug.current,
        "image": image.asset->url,
    }`
  );
}

export async function getBanner() {
  return client.fetch(
    groq`*[_type == "banner"]{
        _id,
        _createdAt,
        description,
        url,
        "image": image.asset->url,
    }`
  );
}

export async function getAllProducts(
  searchParams: ProductsParamsType
): Promise<ProductType[]> {
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      price,
      description,
      countInStock,
      "slug": slug.current,
      "images": images[].asset->url,
      "mainImage": mainImage.asset->url,
    }`
  );
}
export async function getProductDetails(slug: string): Promise<ProductType> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      price,
      description,
      countInStock,
      "slug": slug.current,
      "images": images[].asset->url,
      "mainImage": mainImage.asset->url,
    }`,
    { slug }
  );
}

export async function getAllFeaturedProducts(): Promise<featuredTypes> {
  const featured = await client.fetch(
    groq`
    *[_type == "featuredProduct"]{
       
        "mostSellingProducts": mostSellingProducts[]->{
            _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "images": images[].asset->url,
            "mainImage": mainImage.asset->url,
        },
        "bestDeals": bestDeals[]->{
          _id,
          name,
          description,
          price,
          "slug": slug.current,
          rating,
          "images": images[].asset->url,
          "mainImage": mainImage.asset->url,
        }
    }
`
  );

  return featured[0];
}

/*

"bestDeals": bestDeals[]->{
  "id": _id,
  name,
  description,
  price,
  "slug": slug.current,
  rating,
  "mainImage": mainImage.asset->url,
},
"trendingProducts": trendingProducts[]->{
  "id": _id,
  name,
  description,
  price,
  "slug": slug.current,
  rating,
  "mainImage": mainImage.asset->url,
},

*/
