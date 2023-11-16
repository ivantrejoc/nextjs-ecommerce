import { AccountButton } from "../AccountButton.tsx";
import { NavBar } from "../NavBar";
import { ShoppingButton } from "../ShoppingButton/";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full h-64 flex-col px-2 justify-center items-center gap-[30px] inline-flex">
      <div className="w-full h-40 top-0 absolute flex flex-row">
        <Image
          className="ml-[40%] py-0 top-0"
          src="/Buime-transparent.png"
          height={260}
          width={260}
          alt="buime logo"
        />
        <div className="ml-auto my-12 py-5 content-end justify-between">
          <AccountButton />
          <ShoppingButton />
        </div>
      </div>
      <div className="w-full h-12 left-0 mt-12  absolute border border-gray-400">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
