import { getCategories } from "@/app/api/products/services/categories.services/categories.services";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    }
    fetchCategories();
  }, []);

  //manejo de selección de categoría
  const handleClickedCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full h-12 left-0 mt-32 mb-0  absolute border bg-purple-300 border-gray-400">
      <nav className="w-full px-10 pt-3 justify-between items-center inline-flex">
        <Link
          key={"all categories"}
          href="/products"
          className="text-black text-base font-normal capitalize leading-normal hover:underline"
        >
          All Categories
        </Link>

        {categories.map((category) => (
          <Link
            key={category}
            href={`/products/categories/${category}`}
            className="text-black text-base font-normal capitalize leading-normal hover:underline"
          >
            {category}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
