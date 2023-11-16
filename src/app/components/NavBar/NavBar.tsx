import React from 'react'

const NavBar = () => {
  return (
    <nav className="w-full px-10 bg-yellow-200 justify-between items-center inline-flex">
    <div className="justify-start items-start flex">
        <a className="text-black text-base font-normal font-['Open Sans'] capitalize leading-normal">Jewelry & Accessories</a>
    </div>
    <div className="justify-start items-start flex">
        <a className="text-black text-base font-normal font-['Open Sans'] capitalize leading-normal">Clothing & Shoes</a>
    </div>
    <div className="justify-start items-start flex">
        <a className="text-black text-base font-normal font-['Open Sans'] capitalize leading-normal">Home & Living</a>
    </div>
    <div className="justify-start items-start flex">
        <a className="text-black text-base font-normal font-['Open Sans'] capitalize leading-normal">Wedding & Party</a>
    </div>
    <div className="justify-start items-start flex">
        <a className="text-black text-base font-normal font-['Open Sans'] capitalize leading-normal">Toys & Entertainment</a>
    </div>
    <div className="justify-start items-start flex">
        <a className="text-black text-base font-normal font-['Open Sans'] capitalize leading-normal">Art & Collectibles</a>
    </div>
    <div className="justify-start items-start flex">
        <a className="text-black text-base font-normal font-['Open Sans'] capitalize leading-normal">Craft Supplies & Tools</a>
    </div>
</nav>
  )
}

export default NavBar