import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const SearchBar = () => {
  return (
    <form className="flex flex-row pl-6 my-5 py-5" action="/" method="post">
        <input type="search" className="h-12 bg-gray-50 border border-gray-400 text-gray-900 text-sm  focus:ring-gray-600 focus:border-gray-800 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-500 dark:text-white dark:focus:ring-gray-200 dark:focus:border-blue-500" placeholder="Search..." />
        <button type="submit" className=" flex flex-row h-12 text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-200 text-sm w-full sm:w-auto px-5 py-5 text-center dark:bg-gray-200 dark:hover:bg-gray-300 dark:focus:ring-gray-400"><HiMiniMagnifyingGlass /></button>
    </form>
  )
}

export default SearchBar