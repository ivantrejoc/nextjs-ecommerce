import { Product } from "../../api/products/models";
import { getProductById } from "../../api/products/services";
import CardDetail from "../../components/CardDetail/CardDetail";

async function fetchProductsById(id: Product) {
  return await getProductById(id);
}
const ProductDetail = async ({
  params: { id }
}: {
  params: { id: Product };
}) => {
  const product = await fetchProductsById(id);

  return (
    <main className="h-full w-full max-w-full max-h-screen">
      <CardDetail data={product} />
    </main>
  );
};

export default ProductDetail;
