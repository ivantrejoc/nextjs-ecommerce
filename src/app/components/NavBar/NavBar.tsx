import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-12 left-0 mt-32 mb-0  absolute border bg-purple-400 border-gray-400">
      <nav className="w-full px-10 pt-3 justify-between items-center inline-flex">
        <div className="justify-start items-start flex">
          <a href="#" className="text-black text-base font-normal capitalize leading-normal hover:underline">
            Jewelry & Accessories
          </a>
        </div>
        <div className="justify-start items-start flex">
          <a href="#" className="text-black text-base font-normal capitalize leading-normal hover:underline">
            Clothing & Shoes
          </a>
        </div>
        <div className="justify-start items-start flex">
          <a href="#" className="text-black text-base font-normal capitalize leading-normal hover:underline">
            Home & Living
          </a>
        </div>
        <div className="justify-start items-start flex">
          <a href="#" className="text-black text-base font-normal capitalize leading-normal hover:underline">
            Wedding & Party
          </a>
        </div>
        <div className="justify-start items-start flex">
          <a href="#" className="text-black text-base font-normal capitalize leading-normal hover:underline">
            Toys & Entertainment
          </a>
        </div>
        <div className="justify-start items-start flex">
          <a href="#" className="text-black text-base font-normal capitalize leading-normal hover:underline">
            Art & Collectibles
          </a>
        </div>
        <div className="justify-start items-start flex">
          <a href="#" className="text-black text-base font-normal capitalize leading-normal hover:underline">
            Craft Supplies & Tools
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
