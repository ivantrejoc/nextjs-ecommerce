import { getProducts } from "../api/products/services";
import Card from "../components/Card/Card";


async function fetchProducts() { 
  return await getProducts(); //EJECUTAMOS EL FETCH DE SERVICES
}

const Products = async () => {

  const products = await fetchProducts();
  return (
    <main>
      {products.map((product)=> (<Card key={product.id} data={product}/>))}
    </main>
  );
};

export default Products;
