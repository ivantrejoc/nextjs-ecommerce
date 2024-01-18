import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <div className="flex w-3/5 mx-10 rounded bg-gray-100">
      <input
        className=" w-full border-none bg-gray-100 px-4 py-1 text-gray-400 outline-none focus:outline-none "
        type="search"
        name="search"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="m-2 rounded bg-black px-4 py-2 text-white"
      >
        <HiMiniMagnifyingGlass />
      </button>
    </div>
  );
};

export default SearchBar;
