import { z } from "zod";

export const productParamsSchema = z.object({
  categorie: z.string().optional(),
  priceRange: z.string().optional(),
  sort: z.string().optional(),
  page: z.string().optional(),
});

export type ProductsParamsType = z.infer<typeof productParamsSchema>;
