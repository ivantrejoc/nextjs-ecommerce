import { getCategories } from "@/app/api/products/services/categories.services/categories.services";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    }
    fetchCategories();
  }, []);

  return (
    <div className="w-full h-12 border bg-purple-300 border-gray-400">
      <nav className="w-full lg:px-1 pt-3 flex gap:28 lg:gap-28 justify-center items-center">
        <Link
          key={"all categories"}
          href="/products"
          className="text-black text-xs font-light lg:text-base lg:font-normal px-2 capitalize leading-normal hover:underline"
        >
          All Categories
        </Link>

        {categories.map((category) => (
          <Link
            key={category}
            href={`/products/categories/${category}`}
            className="text-black text-xs font-light lg:text-base lg:font-normal px-2 capitalize leading-normal hover:underline"
          >
            {category}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
