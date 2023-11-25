import { getProducts } from "../api/products/services";
import Card from "../components/Card/Card";


async function fetchProducts() { 
  return await getProducts(); //EJECUTAMOS EL FETCH DE SERVICES
}

const Products = async () => {

  const products = await fetchProducts();
  return (
    <main className="bg-red-400 grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-6 md:grid-cols-2 my-6 p-6 md:grid-rows-4 md:gap-2 place-items-center">
      {products.map((product)=> (<Card key={product.id} data={product}/>))}
    </main>
  );
};

export default Products;
