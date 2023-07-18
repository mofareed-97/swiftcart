import { GetProductsValidatorSchema } from "@/lib/validation/product";
import {
  CategoryType,
  ProductType,
  ProductsFetchType,
  StoredFile,
} from "@/types";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { env } from "@/env.mjs";

export async function getAllProducts(
  input: GetProductsValidatorSchema
): Promise<ProductsFetchType> {
  const res = await fetch(`${env.NEXT_PUBLIC_SERVER_URL}/api/product?page=${
    input.page || "1"
  }${input.categories ? `&categories=${input.categories}` : ""}
  `);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data;
}

export async function getFeaturedProducts(): Promise<ProductType[]> {
  const res = await fetch(`${env.NEXT_PUBLIC_SERVER_URL}/api/product/features`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data;
}

export async function getBestDealsProducts(): Promise<ProductType[]> {
  const res = await fetch(`${env.NEXT_PUBLIC_SERVER_URL}/api/product/deals`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data;
}

export async function getSingleProduct(id: string): Promise<ProductType> {
  const res = await fetch(
    // `https://swiftcart-admin.vercel.app/api/product/${id}`
    `${env.NEXT_PUBLIC_SERVER_URL}/api/product/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data;
}

export async function getCategories(): Promise<CategoryType[]> {
  // const res = await fetch("https://swiftcart-admin.vercel.app/api/category");
  const res = await fetch(`${env.NEXT_PUBLIC_SERVER_URL}/api/category`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return data;
}
