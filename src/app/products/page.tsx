"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../api/products/services/product.services";
import Card from "../components/Card/Card";
import { Product } from "../api/products/models";
import { Pagination } from "../components/Pagination";

//PARA SSR creamos componente de server async/ await y ejecutamos la función
// async function fetchProducts() {
//   return await getProducts(); //EJECUTAMOS EL FETCH DE SERVICES
// }
const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  useEffect(() => {
    async function fetchProducts() {
      const productsData = await getProducts();
      setProducts(productsData);
    }
    fetchProducts();
  }, []);

  const indexOfLastProd = currentPage * pageSize;
  const indexOfFirstProd = indexOfLastProd - pageSize;
  const currentProducts = products.slice(indexOfFirstProd, indexOfLastProd);

  const pagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="flex flex-col items-center">
      <Pagination
        pageSize={pageSize}
        products={products}
        currentPage={currentPage}
        pagination={pagination}
      />

      <section className="grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-6 md:grid-cols-2 my-6 p-6 md:grid-rows-4 md:gap-2 place-items-center">
        {currentProducts.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </section>
    </main>
  );
};

export default Products;
