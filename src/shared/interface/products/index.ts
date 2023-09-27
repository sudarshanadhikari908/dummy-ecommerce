export type IProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  branch: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type IProductDetail = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  brand: string;
  rating: number;
  stock: number;
  branch: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity?: number;
};
