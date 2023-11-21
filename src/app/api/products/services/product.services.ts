// lógica de peticiones a una api según clean architecture
import { Product } from "../models"; //import viene del barrel

export const getProducts = async (): Promise<Product[]> => {
  const URL = "https://fakestoreapi.com/products";
  const apiProducts = await fetch(URL);
  const data = await apiProducts.json();
  return data;
  //   const cleanData = data.results;
  //   console.log(cleanData);
  //   return cleanData;
};
