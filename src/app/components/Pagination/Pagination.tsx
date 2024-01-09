import { Product } from "@/app/api/products/models";

interface Pagination {
  pageSize: number;
  products: Product[];
  currentPage: number;
  pagination: (pageNumber: number) => void;
}

const Pagination = ({
  pageSize,
  products,
  currentPage,
  pagination
}: Pagination) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(products.length / pageSize); i++) {
    pageNumbers.push(i);
  }

  console.log("Estos son los números de página: ", pageNumbers);
  console.log("Esta es la página actual: ", currentPage);
  return (
    <nav className="flex flex-row items-center -space-x-px h-10 mb-8 mt-2">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li>
          <button
            className="relative block rounded bg-transparent px-3 py-1.5 text-base text-neutral-600 transition-all duration-300 hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            onClick={() => pagination(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {pageNumbers?.map((number) => (
          <li key={number}>
            <button
              className={`relative block rounded bg-transparent px-3 py-1.5 text-base text-gray-500 transition-all duration-300 hover:bg-neutral-200  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                currentPage === number
                  ? " text-gray-900 bg-gray-300 focus:bg-gray-300 focus-within:bg-gray-300 dark:focus:bg-gray-100 dark:focus-within:bg-gray-100"
                  : ""
              }`}
              key={number}
              onClick={() => pagination(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            className="relative block rounded bg-transparent px-3 py-1.5 text-base text-neutral-600 transition-all duration-300 hover:bg-neutral-200 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            onClick={() => pagination(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
