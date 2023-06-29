import { createClient, groq } from "next-sanity";
import sanityConfig from "./config";
import { CategoryType, featuredTypes } from "@/types/sanityTypes";

const client = createClient(sanityConfig);
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

export async function getAllFeaturedProducts(): Promise<featuredTypes> {
  const featured = await client.fetch(
    groq`
    *[_type == "featuredProduct"]{
       
        "mostSellingProducts": mostSellingProducts[]->{
            "id": _id,
            name,
            description,
            price,
            "slug": slug.current,
            rating,
            "mainImage": mainImage.asset->url,
        },
        "bestDeals": bestDeals[]->{
          "id": _id,
          name,
          description,
          price,
          "slug": slug.current,
          rating,
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
