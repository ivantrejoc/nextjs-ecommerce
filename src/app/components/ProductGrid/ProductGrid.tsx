import Image from "next/image";
import { getProducts } from "../../api/products/services";

async function fetchProducts() {
  return await getProducts(); //EJECUTAMOS EL FETCH DE SERVICES
}

const ProductGrid = async () => {
  const products = await fetchProducts();

  return (
    <main>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className="font-medium text-xl text-black dark:text-gray-300 hover:underline px-6"
        >
          All categories
        </button>
        <button
          type="button"
          className="font-medium text-xl text-black dark:text-gray-300 hover:underline px-6"
        >
          Shoes
        </button>
        <button
          type="button"
          className="font-medium text-xl text-black dark:text-gray-300 hover:underline px-6"
        >
          Bags
        </button>
        <button
          type="button"
          className="font-medium text-xl text-black dark:text-gray-300 hover:underline px-6"
        >
          Electronics
        </button>
        <button
          type="button"
          className="font-medium text-xl text-black dark:text-gray-300 hover:underline px-6"
        >
          Gaming
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-content-center justify-items-center x-24 p-6 mx-36">
        {products.map((product) => (
            
          <Image
            className="h-auto max-w-full rounded-lg"
            key={product.id}
            src={product.image}
            width={100}
            height={100}
            alt=""
          />
         
        ))}
         </div>
      
    </main>
  );
};

export default ProductGrid;
