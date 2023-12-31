export interface ProductsFetchType {
  totalPages: number;
  results: ProductType[];
}

export interface ProductType {
  id: string;
  slug: string;
  name: string;
  price?: string;
  priceInt: number;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  mainImage: null | string;
  countInStock: number;
  likes: number;
  sales: number;
  categoryId: string;
  images: ImageType[];
  category: CategoryType;
}

export interface CategoryType {
  id: string;
  name: string;
  slug: string;
  categoryImage?: {
    id: string;
    name: string;
    url: string;
    categoryId: string;
    createdAt: Date;
  }[];
}

export interface StoredFile {
  id: string;
  name?: string;
  productId?: string;
  url: string;
}
export interface ImageType {
  id: string;
  name: string;
  url: string;
  productId: string;
  mainImage: boolean;
  createdAt: Date;
}
