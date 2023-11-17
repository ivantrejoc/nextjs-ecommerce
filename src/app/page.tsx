import Image from "next/image";
import { HiShoppingBag } from "react-icons/hi2";

export default function Home() {
  return (
    <main>
      <section className="flex flex-wrap justify-center py-2 mx-24 mt-12">
        <div className="w-1/4 px-6 mr-36">
          <h3 className="text-black text-6xl font-light capitalize mt-24">
            Collections
          </h3>
          <p className="text-black text-xl font-normal capitalize mt-12">
            Explore many different collections from all our allies brands!
          </p>
          <a
            href="/products"
            className="bg-blue-400 flex flex-row text-lg font-medium rounded-lg w-1/2 p-4 mt-12 justify-center hover:text-white hover:bg-blue-500"
          >
            <HiShoppingBag className="mt-1 mr-2" />
            Shop Now
          </a>
        </div>

        <Image
          className="rounded-tl-3xl rounded-br-3xl"
          src="/models-images/engin-akyurt-jaZoffxg1yc-unsplash%201.png"
          height={700}
          width={350}
          alt=""
        />
      </section>

      <section className="flex flex-wrap justify-center py-2 mx-24 my-16">
        <div className="grid grid-cols-5 grid-rows-1 gap-6">
          <div>
            <a href="#">
              <Image src="/brand/brand-1.png" height={50} width={240} alt="" />
            </a>
          </div>

          <div>
            <a href="#">
              <Image src="/brand/brand-2.png" height={50} width={240} alt="" />
            </a>
          </div>

          <div>
            <a href="#">
              <Image src="/brand/03.png" height={50} width={240} alt="" />
            </a>
          </div>

          <div>
            <a href="#">
              <Image src="/brand/brand-4.png" height={50} width={240} alt="" />
            </a>
          </div>

          <div>
            <a href="#">
              <Image src="/brand/brand-5.png" height={50} width={250} alt="" />
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          >
            All categories
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Shoes
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Bags
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Electronics
          </button>
          <button
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          >
            Gaming
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/models-images/image-product-1.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/models-images/image-product-1.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/models-images/image-product-1.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/models-images/image-product-1.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/models-images/image-product-1.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/models-images/image-product-1.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/models-images/image-product-1.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/models-images/image-product-1.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div>
            <Image
              className="h-auto max-w-full rounded-lg"
              src="/models-images/image-product-1.png"
              width={100}
              height={100}
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}
