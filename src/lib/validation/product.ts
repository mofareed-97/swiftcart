import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  price: z.number().or(z.string()),
  description: z.string(),
  slug: z.string(),
  category: z.string(),
  rating: z.number().optional(),
  images: z
    .unknown()
    .refine((val) => {
      if (!Array.isArray(val)) return false;
      if (val.some((file) => !(file instanceof File))) return false;
      return true;
    }, "Must be an array of File")
    .optional()
    .nullable()
    .default(null),

  countInStock: z.number().or(z.string()).optional().default(1),
});
