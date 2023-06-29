import { createClient, groq } from "next-sanity";
import sanityConfig from "./config";
export async function getCategories() {
  const client = createClient(sanityConfig);

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
