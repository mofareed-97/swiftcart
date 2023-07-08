import { db } from "@/lib/db";
import { productSchema } from "@/lib/validation/product";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const productValidate = productSchema.safeParse(body);

    console.log(!productValidate.success);

    if (!productValidate.success) {
      const { errors } = productValidate.error;
      return new Response(
        JSON.stringify({ error: { message: "Invalid request", errors } }),
        { status: 400 }
      );
    }

    productValidate;

    // if (!body.name) {
    //   return new Response("Name is required", { status: 400 });
    // }

    // const product = await db.product.create({
    //   data: {
    //     ...body,
    //     images: {
    //       createMany: {
    //         data: body.images,
    //       },
    //     },
    //   },
    // });

    return new Response(JSON.stringify(body));
  } catch (error) {
    console.log("[PRODUCTS_POST]", error);
    return new Response("Internal error", { status: 500 });
  }
}
