import { AccountButton } from "../AccountButton.tsx";
import { NavBar } from "../NavBar";
import { ShoppingButton } from "../ShoppingButton/";

const Header = () => {
  return (
    <header className="w-full h-60 flex-col px-2 justify-center items-center gap-[30px] inline-flex">
      

      <div className="w-full h-60 top-0 absolute">
        <div className=" bg-blue-300 ml-[80%] mt-[2%] content-end justify-between">
        <AccountButton />
      <ShoppingButton />
        </div>
        
        <div className="ml-[45%] mr-auto top-7 absolute text-black text-[28px] font-normal font-['AmstelvarAlpha']">
          CORAL
        </div>
      </div>
      <div className="w-full h-[0px] left-0 top-20 absolute border border-neutral-200"></div>
      <NavBar />
    </header>
  );
};

export default Header;
