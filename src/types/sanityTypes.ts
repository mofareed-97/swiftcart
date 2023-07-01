export interface CategoryType {
  _id: string;
  _createdAt: Date | string;
  name: string;
  slug: string;
  type: string;
  image: string;
}

export interface BannerType {
  _id: string;
  description: string;
  image: string;
  url: string | null;
  _createdAt: Date | string;
}

export interface ProductType {
  _id: string;
  _createdAt: Date | string;
  name: string;
  slug: string;
  type: string;
  mainImage: string;
  price: string;
  countInStock: string;
  rating?: any;
  images: string[];
  description: string;
}

export interface featuredTypes {
  mostSellingProducts: ProductType[];
  bestDeals: ProductType[];
  trendingProducts: ProductType[];
}
