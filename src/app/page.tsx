// "use client"
import Image from "next/image";
import { HiShoppingBag } from "react-icons/hi2";
import { useSession } from "next-auth/react";


export default function Home() {

  // const { data: session, status } = useSession();
  // console.log("ESTOS SON LOS DATOS DE SESIÓN", session?.user);

  // if(status === "authenticated"){
  //   return (
  //     <main>
  //       <p>Hello,{session.user?.email}</p>
  //       <section
  //         title="collections"
  //         className="flex flex-wrap justify-center py-2 mx-24 mt-12"
  //       >
  //         <div className="w-1/4 px-6 mr-36">
  //           <h3 className="text-black text-6xl font-light capitalize mt-24">
  //             Collections
  //           </h3>
  //           <p className="text-black text-xl font-normal capitalize mt-12">
  //             Explore many different collections from all our allies brands!
  //           </p>
  //           <a
  //             href="/products"
  //             className="bg-blue-400 flex flex-row text-sm font-medium rounded-lg w-1/2 p-2 mt-12 justify-center hover:text-white hover:bg-blue-500"
  //           >
  //             <HiShoppingBag className="mt-1 mr-2" />
  //             Shop Now
  //           </a>
  //         </div>
  
  //         <Image
  //           className="rounded-tl-3xl rounded-br-3xl"
  //           src="/models-images/engin-akyurt-jaZoffxg1yc-unsplash%201.png"
  //           height={700}
  //           width={350}
  //           alt=""
  //         />
  //       </section>
  
  //       <section className="flex flex-wrap justify-center py-2 mx-24 my-16">
  //         <div className="grid grid-cols-5 grid-rows-1 gap-6">
  //           <div>
  //             <a href="#">
  //               <Image src="/brand/brand-1.png" height={50} width={240} alt="" />
  //             </a>
  //           </div>
  
  //           <div>
  //             <a href="#">
  //               <Image src="/brand/brand-2.png" height={50} width={240} alt="" />
  //             </a>
  //           </div>
  
  //           <div>
  //             <a href="#">
  //               <Image src="/brand/03.png" height={50} width={240} alt="" />
  //             </a>
  //           </div>
  
  //           <div>
  //             <a href="#">
  //               <Image src="/brand/brand-4.png" height={50} width={240} alt="" />
  //             </a>
  //           </div>
  
  //           <div>
  //             <a href="#">
  //               <Image src="/brand/brand-5.png" height={50} width={250} alt="" />
  //             </a>
  //           </div>
  //         </div>
  //       </section>
  
  //       <section className="bg-black w-3/5 flex flex-row justify-center mx-auto my-16 p-0">
  //         <Image
  //           src="/images/andrey-zvyagintsev-e-qj-1-z-mpq-vm-unsplash-1.png"
  //           width={550}
  //           height={0}
  //           alt="Andrey Zvyagintsev"
  //         />
  //         <div className="bg-black w-1/3 py-4">
  //           <Image
  //             src="/images/px-zara-logo-2.png"
  //             width={150}
  //             height={50}
  //             alt="Andrey Zvyagintsev"
  //           />
  //           <p className="text-white capitalize leading-10 my-3">
  //             Lustrous yet understated. The new evening wear collection
  //             exclusively offered at the reopened Giorgio Armani boutique in Los
  //             Angeles.
  //           </p>
  //           <a
  //             href="/products"
  //             className="bg-gray-200 flex flex-row text-xs font-medium rounded-lg w-1/3 p-2 mt-6 justify-center hover:text-white hover:bg-blue-500"
  //           >See Collection</a>
  //         </div>
  //       </section>
  
  //       <section>
  //         <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
  //           <button
  //             type="button"
  //             className="font-medium text-xl text-black dark:text-gray-300 hover:underline px-6"
  //           >
  //             All categories
  //           </button>
  //           <button
  //             type="button"
  //             className="font-medium text-xl text-black dark:text-gray-300 hover:underline px-6"
  //           >
  //             Shoes
  //           </button>
  //           <button
  //             type="button"
  //             className="font-medium text-xl text-black dark:text-gray-300 hover:underline px-6"
  //           >
  //             Bags
  //           </button>
  //           <button
  //             type="button"
  //             className="font-medium text-xl text-black dark:text-gray-300 hover:underline px-6"
  //           >
  //             Electronics
  //           </button>
  //           <button
  //             type="button"
  //             className="font-medium text-xl text-black dark:text-gray-300 hover:underline px-6"
  //           >
  //             Gaming
  //           </button>
  //         </div>
  //         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-content-center justify-items-center x-24 p-6 mx-36">
  //           <Image
  //             className="h-auto max-w-full rounded-lg"
  //             src="/models-images/image-product-1.png"
  //             width={100}
  //             height={100}
  //             alt=""
  //           />
  
  //           <Image
  //             className="h-auto max-w-full rounded-lg"
  //             src="/models-images/image-product-1.png"
  //             width={100}
  //             height={100}
  //             alt=""
  //           />
  
  //           <Image
  //             className="h-auto max-w-full rounded-lg"
  //             src="/models-images/image-product-1.png"
  //             width={100}
  //             height={100}
  //             alt=""
  //           />
  
  //           <Image
  //             className="h-auto max-w-full rounded-lg"
  //             src="/models-images/image-product-1.png"
  //             width={100}
  //             height={100}
  //             alt=""
  //           />
  
  //           <Image
  //             className="h-auto max-w-full rounded-lg"
  //             src="/models-images/image-product-1.png"
  //             width={100}
  //             height={100}
  //             alt=""
  //           />
  
  //           <Image
  //             className="h-auto max-w-full rounded-lg"
  //             src="/models-images/image-product-1.png"
  //             width={100}
  //             height={100}
  //             alt=""
  //           />
  
  //           <Image
  //             className="h-auto max-w-full rounded-lg"
  //             src="/models-images/image-product-1.png"
  //             width={100}
  //             height={100}
  //             alt=""
  //           />
  
  //           <Image
  //             className="h-auto max-w-full rounded-lg"
  //             src="/models-images/image-product-1.png"
  //             width={100}
  //             height={100}
  //             alt=""
  //           />
  
  //           <Image
  //             className="h-auto max-w-full rounded-lg"
  //             src="/models-images/image-product-1.png"
  //             width={100}
  //             height={100}
  //             alt=""
  //           />
  //         </div>
  //       </section>
  //     </main>
  //   );

  // }
  return (
    <main>
      <section
        title="collections"
        className="flex flex-wrap justify-center py-2 mx-24 mt-12"
      >
        <div className="w-1/4 px-6 mr-36">
          <h3 className="text-black text-6xl font-light capitalize mt-24">
            Collections
          </h3>
          <p className="text-black text-xl font-normal capitalize mt-12">
            Explore many different collections from all our allies brands!
          </p>
          <a
            href="/products"
            className="bg-blue-400 flex flex-row text-sm font-medium rounded-lg w-1/2 p-2 mt-12 justify-center hover:text-white hover:bg-blue-500"
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

      <section className="bg-black w-3/5 flex flex-row justify-center mx-auto my-16 p-0">
        <Image
          src="/images/andrey-zvyagintsev-e-qj-1-z-mpq-vm-unsplash-1.png"
          width={550}
          height={0}
          alt="Andrey Zvyagintsev"
        />
        <div className="bg-black w-1/3 py-4">
          <Image
            src="/images/px-zara-logo-2.png"
            width={150}
            height={50}
            alt="Andrey Zvyagintsev"
          />
          <p className="text-white capitalize leading-10 my-3">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <a
            href="/products"
            className="bg-gray-200 flex flex-row text-xs font-medium rounded-lg w-1/3 p-2 mt-6 justify-center hover:text-white hover:bg-blue-500"
          >See Collection</a>
        </div>
      </section>

      <section>
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
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/models-images/image-product-1.png"
            width={100}
            height={100}
            alt=""
          />

          <Image
            className="h-auto max-w-full rounded-lg"
            src="/models-images/image-product-1.png"
            width={100}
            height={100}
            alt=""
          />

          <Image
            className="h-auto max-w-full rounded-lg"
            src="/models-images/image-product-1.png"
            width={100}
            height={100}
            alt=""
          />

          <Image
            className="h-auto max-w-full rounded-lg"
            src="/models-images/image-product-1.png"
            width={100}
            height={100}
            alt=""
          />

          <Image
            className="h-auto max-w-full rounded-lg"
            src="/models-images/image-product-1.png"
            width={100}
            height={100}
            alt=""
          />

          <Image
            className="h-auto max-w-full rounded-lg"
            src="/models-images/image-product-1.png"
            width={100}
            height={100}
            alt=""
          />

          <Image
            className="h-auto max-w-full rounded-lg"
            src="/models-images/image-product-1.png"
            width={100}
            height={100}
            alt=""
          />

          <Image
            className="h-auto max-w-full rounded-lg"
            src="/models-images/image-product-1.png"
            width={100}
            height={100}
            alt=""
          />

          <Image
            className="h-auto max-w-full rounded-lg"
            src="/models-images/image-product-1.png"
            width={100}
            height={100}
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
