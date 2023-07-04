import Stripe from "stripe";
import getStripe from "./getStripe";
import { ProductQty } from "@/hooks/useCart";

export async function handleCheckout(items: ProductQty[]) {
  const stripe = await getStripe();

  const response = await fetch("/api/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items),
  });

  if (response.status === 500) {
    console.log(response);
    return;
  }

  const data: { session: Stripe.Checkout.Session } = await response.json();

  stripe?.redirectToCheckout({ sessionId: data.session.id });
}
