import { db } from "@/lib/db";
import { productSchema } from "@/lib/validation/product";
import { StoredFile } from "@/types";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// export async function addProductAction(
//     input: z.infer<typeof productSchema> & {
//       storeId: number
//       images: StoredFile[] | null
//     }
//   ) {
//     const productWithSameName = await db.query.products.findFirst({
//       where: eq(products.name, input.name),
//     })

//     if (productWithSameName) {
//       throw new Error("Product name already taken.")
//     }

//     await db.insert(products).values({
//       ...input,
//       storeId: input.storeId,
//       images: input.images,
//     })

//     // revalidatePath(`/dashboard/stores/${input.storeId}/products.`)
//   }
export async function addProductAction(
  input: z.infer<typeof productSchema> & {
    images: StoredFile[];
  }
) {
  // const productWithSameName = await db.product.findFirst({
  //   where: {
  //     name: input.name,
  //   },
  // });
  // if (productWithSameName) {
  //   throw new Error("Product name already taken.");
  // }
  //   const newProduct = await db.product.create({
  //     data: {
  //       ...input,
  //       images: {
  //         createMany: {
  //           data: input.images,
  //         },
  //       },
  //     },
  //   });
  //   return newProduct;
  // revalidatePath(`/dashboard/stores/${input.storeId}/products.`)
}
