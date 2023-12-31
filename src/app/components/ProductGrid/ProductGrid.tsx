import { useEffect, useState } from "react";
import { getProducts } from "@/app/api/products/services/product.services";
import { getCategories } from "@/app/api/products/services/categories.services/categories.services";
import Image from "next/image";
import { Product } from "@/app/api/products/models";
import Link from "next/link";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  useEffect(() => {
    async function fetchProducts() {
      const productsData = await getProducts();
      setProducts(productsData);
    }
    async function fetchCategories() {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    }
    fetchProducts();
    fetchCategories();
  }, []);

  //manejo de selección de categoría
  const handleClickedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  //filtrado de productos por categoría:
  const prodByCategory =
    selectedCategory === "All categories"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <main>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="font-medium text-xl text-black dark:text-gray-300 hover:underline px-6"
            onClick={() => handleClickedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-content-center justify-items-center x-24 p-6 mx-36">
        {prodByCategory.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <Image
              className="h-auto max-w-full rounded-lg"
              key={product.id}
              src={product.image}
              width={100}
              height={100}
              alt=""
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProductGrid;
