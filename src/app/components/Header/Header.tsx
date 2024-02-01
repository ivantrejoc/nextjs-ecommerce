"use client";

import { NavBar } from "../NavBar";
import { AccountButton } from "../AccountButton/";
import { ShoppingButton } from "../ShoppingButton/";
import { LogOutButton } from "../LogOutButton";
import { ShoppingCartButton } from "../ShoppingCartButton/";
import { SearchBar } from "../SearchBar/";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  console.log({ session, status });
  if (session) {
    return (
      <header className="w-full h:fit lg:flex lg:h-36 py-auto top-0 flex flex-col items-center lg:gap-[30px] aboslute">
        <div className="lg:flex w-full h-1/2 lg:justify-around mt-2 items-center">
          {/* <div className="bg-red-300 w-3/4 ml-6 my-auto h-3/4 relative"> */}
            <a href="/" className="mx-12">
              <Image
              
                src="/Buime-transparent.png"
                height={75}
                width={75}
                
                alt="buime logo"
              />
            </a>
          {/* </div> */}
          <div className="w-full items-center md:mx-auto justify-center">
            <SearchBar />
          </div>

          <div className="w-full h-full lg:w-4/12 lg:justify-end md:justify-end">
            <p className="text-black text-xs font-light lg:text-base lg:font-normal px-3  leading-normal ">
              Hello, {session.user?.email}
            </p>
            <div className="flex flex-row content-center">
              <AccountButton />
              <ShoppingButton />
              <ShoppingCartButton />
              <LogOutButton />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-center">
          <NavBar />
        </div>
      </header>
    );
  }
  return (
    <header className="w-full h:fit lg:flex lg:h-36 py-auto top-0 flex flex-col items-center lg:gap-[30px] aboslute ">
      <div className="lg:flex w-full h-1/2 lg:justify-around mt-2 items-center">
        <div className="w-1/5 ml-2 my-auto h-3/4 relative  justify-center">
          <a href="/">
            <Image
              className="object-contain"
              src="/Buime-transparent.png"
              fill={true}
              alt="buime logo"
            />
          </a>
        </div>
        <div className="w-full items-center mx-auto justify-center">
          <SearchBar />
        </div>

        <div className="w-full h-full lg:w-4/12 lg:justify-end md:justify-end">
          <div className="flex flex-row items-center pt-4 content-center">
            <AccountButton />
            <ShoppingButton />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
