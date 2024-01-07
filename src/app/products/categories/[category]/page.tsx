import { Product } from "@/app/api/products/models";
import { getProductsByCategory } from "@/app/api/products/services/product.services";
import { Card } from "@/app/components/Card";

async function fetchProductsByCategory(category: Product) {
  return await getProductsByCategory(category);
}
const Category = async ({
  params: { category }
}: {
  params: { category: Product };
}) => {
  const productsByCategory = await fetchProductsByCategory(category);

  return <main className="grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-6 md:grid-cols-2 my-6 p-6 md:grid-rows-4 md:gap-2 place-items-center">
    {productsByCategory.map((product)=>
    <Card key={product.id} data={product} />
    )}
  </main>;
};

export default Category;
