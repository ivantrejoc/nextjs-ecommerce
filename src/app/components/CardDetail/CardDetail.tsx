"use client";
import { useCart } from "@/context";
import Image from "next/image";

export interface CardDetail {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

interface Props {
  data: CardDetail;
}

const CardDetail = ({ data }: Props) => {
  const { getItemQuant, increaseItem } = useCart();

  const quantity = getItemQuant(data.id);

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
      <div className="flex flex-row md:flex-row px-4 h-full">
        <Image
          className="p-2 rounded-t-lg max-h-96 max-w mx-12 my-12 md:h-80 relative content-center"
          width={20 / 10}
          height={20 / 10}
          sizes="100vw"
          style={{
            width: "40%",
            height: "80%",
            borderRadius: "4%"
          }}
          src={data.image}
          alt={data.title}
          loading="lazy"
        />

        <div className="md:flex-1 px-4 py-12">
          <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
            {data.title}
          </h2>

          <div className="flex items-center space-x-4 my-4">
            <div>
              <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                <span className="mr-1 mt-1">$</span>
                <span className="font-bold  text-3xl">
                  {data.price.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-green-400 text-xl font-semibold">Save 12%</p>
              <p className="text-gray-400 text-sm">Rate: {data.rating.rate}</p>
            </div>
          </div>

          <p className="text-gray-700 text-md">{data.description}</p>

          <div className="flex py-4 space-x-4">
            <button
              type="button"
              className=" bg-blue-400 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => increaseItem(data.id)}
            >
              Add to Cart
            </button>
          </div>
          <a href="/products" className="text-xs text-gray-500 hover:underline">
            Back to products
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
