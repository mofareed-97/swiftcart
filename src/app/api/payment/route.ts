import { ProductQty } from "@/hooks/useCart";
import Stripe from "stripe";

export async function POST(req: Request) {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2022-11-15",
    typescript: true,
  });

  try {
    const data: ProductQty[] = await req.json();

    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",

      line_items: data.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: item.images,
          },
          unit_amount: item.price * 100,
        },

        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
        quantity: item.qty,
      })),
      success_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000",
    });

    return new Response(JSON.stringify({ session }));
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
