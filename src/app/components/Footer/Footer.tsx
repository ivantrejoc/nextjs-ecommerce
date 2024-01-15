import Image from "next/image";
import { LiaArrowUpSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="w-full items-center mt-24 ">
      <div className="bg-purple-300 h-36 grid grid-cols-3 sm:grid-cols-4 grid-rows-1 gap-8 sm:gap-6 py-10 px-12 place-items-center place-content-center">
        <div className="flex flex-col h-36 w-40 mx-24 p-0">
          <div className="flex flex-col">
          <a href="/">
            <Image
              className="m-3"
              src="/Buime-transparent.png"
              height={50}
              width={30}
              alt="buime logo"
            />
          </a>
          <a href="https://ivantrejo.vercel.app/" className="hover:underline">
          <p className="h-12 w-36 mx-3 font-light text-xs text-start">
            Made with love and loads of coffee by Ivan Trejo. 
          </p>
          </a>
          <div className="flex mt-0 sm:justify-center sm:mt-0">
            <a href="#">
              <Image
                className="m-2"
                src="/Facebook_black.svg"
                height={30}
                width={30}
                alt="facebook logo"
              />
              <span className="sr-only"></span>
            </a>
            <a href="#">
              <Image
                className="m-2"
                src="/Instagram_black.svg"
                height={30}
                width={30}
                alt="instagram logo"
              />
              <span className="sr-only"></span>
            </a>
          </div>
          </div>         
          
        </div>
        <div className=" p-0">
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            catalog
          </h2>
          <ul className="text-gray-800 dark:text-gray-400 font-medium">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Jewlery
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Mens´s Clothing
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Women´s Clothing
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            About us
          </h2>
          <ul className="text-gray-800 dark:text-gray-400 font-medium">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                History
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Brands
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Costumer Service
          </h2>
          <ul className="text-gray-800 dark:text-gray-400 font-medium">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Shipping Service
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Fedelity 
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" bg-blue-400 grid grid-cols-3 grid-rows-1 gap-60 h-12 place-items-center">
        <div className=" ml-6">
          <span className="text-sm text-gray-800 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Buime™
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <div className=" grid grid-cols-4 grid-rows-1 gap-2 place-items-center">
          <Image
            className=""
            src="/mastercard-alt.svg"
            height={30}
            width={40}
            alt="master card logo"
          />
          <Image
            src="/visa.svg"
            height={30}
            width={40}
            alt="master card logo"
          />
          <Image
            src="/american-express.svg"
            height={30}
            width={40}
            alt="master card logo"
          />
          <Image
            src="/paypal.svg"
            height={30}
            width={40}
            alt="master card logo"
          />
        </div>
        <a href="#" className="flex flex-row align-middle top-0">
          <LiaArrowUpSolid className="mt-1" />
          <p className="font-medium text-md text-black dark:text-gray-300 hover:underline pl-1">
            Scroll to top
          </p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
