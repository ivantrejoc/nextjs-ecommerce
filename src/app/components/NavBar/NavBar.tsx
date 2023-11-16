import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-12 left-0 mt-32 mb-0  absolute border border-gray-400">
      <nav className="w-full px-10 pt-3 justify-between items-center inline-flex">
        <div className="justify-start items-start flex">
          <a className="text-black text-base font-normal capitalize leading-normal">
            Jewelry & Accessories
          </a>
        </div>
        <div className="justify-start items-start flex">
          <a className="text-black text-base font-normal capitalize leading-normal">
            Clothing & Shoes
          </a>
        </div>
        <div className="justify-start items-start flex">
          <a className="text-black text-base font-normal capitalize leading-normal">
            Home & Living
          </a>
        </div>
        <div className="justify-start items-start flex">
          <a className="text-black text-base font-normal capitalize leading-normal">
            Wedding & Party
          </a>
        </div>
        <div className="justify-start items-start flex">
          <a className="text-black text-base font-normal capitalize leading-normal">
            Toys & Entertainment
          </a>
        </div>
        <div className="justify-start items-start flex">
          <a className="text-black text-base font-normal capitalize leading-normal">
            Art & Collectibles
          </a>
        </div>
        <div className="justify-start items-start flex">
          <a className="text-black text-base font-normal capitalize leading-normal">
            Craft Supplies & Tools
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
