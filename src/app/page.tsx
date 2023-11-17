import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex flex-wrap">
        <div className="">
          <h2>Collections</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button>Shop Now</button>
        </div>
        <div className="w-[424px] h-[542px] rounded-tl-full rounded-br-full flex-col justify-center items-center inline-flex">
          <Image src="/models-images/engin-akyurt-jaZoffxg1yc-unsplash%201.png" height={700} width={350} alt="" />
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
