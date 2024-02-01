"use client";
import Image from "next/image";
import { HiShoppingBag } from "react-icons/hi2";
import { ProductGrid } from "./components/ProductGrid";

export default function Home() {
  return (
    <main>
      <section
        title="collections"
        className="flex flex-wrap justify-center py-2 mx-24 mt-12 gap-0"
      >
        <div className="w-full mb-3 md:mb-0 md:w-1/3 px-6 justify-center">
          <h3 className="text-black text-3xl lg:text-6xl font-light capitalize mt-24">
            Collections
          </h3>
          <p className="text-black text-baseline text-center lg:text-left lg:text-xl font-normal capitalize mt-12">
            Explore many different collections from all our allies brands!
          </p>
          <a
            href="/products"
            className="bg-blue-400 flex flex-row text-xs lg:text-sm font-normal lg:font-medium rounded-lg w-full xs:w-full lg:w-1/2 p-2 mt-12 justify-center text-center hover:text-white hover:bg-blue-500"
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
          alt="model"
        />
      </section>

      <section className="flex flex-wrap justify-center py-2 mx-24 my-16">
        <div className="grid grid-cols-5 grid-rows-1 gap-6">
          <div>
            <a href="#">
              <Image
                src="/brand/brand-1.png"
                height={50}
                width={240}
                alt="brands"
              />
            </a>
          </div>

          <div>
            <a href="#">
              <Image
                src="/brand/brand-2.png"
                height={50}
                width={240}
                alt="brands"
              />
            </a>
          </div>

          <div>
            <a href="#">
              <Image src="/brand/03.png" height={50} width={240} alt="brands" />
            </a>
          </div>

          <div>
            <a href="#">
              <Image
                src="/brand/brand-4.png"
                height={50}
                width={240}
                alt="brands"
              />
            </a>
          </div>

          <div>
            <a href="#">
              <Image
                src="/brand/brand-5.png"
                height={50}
                width={250}
                alt="brands"
              />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black w-3/5 flex flex-col md:flex-row justify-center mx-auto my-16 p-0">
        <Image
          src="/images/andrey-zvyagintsev-e-qj-1-z-mpq-vm-unsplash-1.png"
          width={550}
          height={200}
          alt="Andrey Zvyagintsev"
        />
        <div className="bg-black w-full md:w-1/3 py-4 content-center justify-center">
          <Image
            src="/images/px-zara-logo-2.png"
            width={150}
            height={50}
            alt="zara"
          />
          <p className="text-white px-1 text-sm lg:text-base capitalize content-center lg:leading-10 my-3">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <a
            href="/products"
            className="bg-gray-200 flex flex-row text-xs font-medium rounded-lg w-3/4 p-2 sm:pl-3 mt-6 justify-center hover:text-white hover:bg-blue-500"
          >
            See Collection
          </a>
        </div>
      </section>

      <section>
        <ProductGrid />
      </section>
    </main>
  );
}
