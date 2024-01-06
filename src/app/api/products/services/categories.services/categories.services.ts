
export const getCategories = async (): Promise<[]> => {
    const URL = "https://fakestoreapi.com/products/categories";
    const apiCategories = await fetch(URL);
    const data = await apiCategories.json();
    return data;
  };
  