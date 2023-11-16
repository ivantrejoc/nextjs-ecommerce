import { AccountButton } from "../AccountButton.tsx";
import { NavBar } from "../NavBar";
import { ShoppingButton } from "../ShoppingButton/";
import Image from "next/image";
import { SearchBar } from "../SearchBar/";

const Header = () => {
  return (
    <header className="w-full h-48 flex-col px-2 justify-center items-center gap-[30px] inline-flex">
      <div className="w-full h-36 top-0 absolute grid grid-cols-3 grid-rows-1 gap-20">
        <SearchBar />
        <a href="/">
        <Image
          className="ml-[30%] px-2 mt-2 "
          src="/Buime-transparent.png"
          height={130}
                    width={130}
          alt="buime logo"
        />
        </a>        
        <div className="ml-auto my-10 py-2 px-auto pr-6 mr-6 h-12 content-center justify-between align-baseline">
          <AccountButton />
          <ShoppingButton />
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
