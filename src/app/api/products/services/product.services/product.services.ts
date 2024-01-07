// lógica de peticiones a una api según clean architecture
import { Product } from "../../models"; //import viene del barrel

export const getProducts = async (): Promise<Product[]> => {
  const URL = "https://fakestoreapi.com/products";
  const apiProducts = await fetch(URL);
  const data = await apiProducts.json();
  return data;
};

export const getProductById = async (id: Product): Promise<Product> => {
  const URL = `https://fakestoreapi.com/products/${id}`;
  const apiProduct = await fetch(URL);
  const data = await apiProduct.json();
  return data;
};

export const getProductsByCategory = async (category: Product): Promise<Product[]> => {
  const URL = `https://fakestoreapi.com/products/category/${category}`;
  const apiProduct = await fetch(URL);
  const data = await apiProduct.json();
  return data;
};


