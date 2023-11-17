import Image from "next/image";
import { LiaArrowUpSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="w-full items-center">
      <div className="bg-purple-300 grid grid-cols-3 sm:grid-cols-4 grid-rows-1 gap-8 sm:gap-6 py-6 px-12 place-items-center">
        <div className=" ml-12">
        <a href="/">
        <Image
          className="m-3"
          src="/Buime-transparent.png"
          height={50}
                    width={50}
          alt="buime logo"
        />
        </a>
      
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
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
        <div className=" p-0">
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            catalog
          </h2>
          <ul className="text-gray-800 dark:text-gray-400 font-medium">
            <li className="mb-2">
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Tailwind CSS
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Tailwind CSS
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
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Tailwind CSS
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Tailwind CSS
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
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Tailwind CSS
              </a>
            </li>
            <li className="mb-2">
              <a href="https://tailwindcss.com/" className="hover:underline">
                Tailwind CSS
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=" bg-blue-500 grid grid-cols-3 grid-rows-1 gap-60 h-12 place-items-center">
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
        <a href="/" className="flex flex-row align-middle top-0">
        <LiaArrowUpSolid className="mt-1"/>
        <p className="font-medium text-md text-black dark:text-gray-300 hover:underline pl-1">Scroll to top
        </p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
