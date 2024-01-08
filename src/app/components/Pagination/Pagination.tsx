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
  return (
    <nav>
      <ul className="list-style-none flex">
        <li>
          <button
            className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
            onClick={() => pagination(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>

        {pageNumbers?.map((number) => (
          <li key={number}>
            <button
              className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                currentPage === number
                  ? " text-gray-900 focus:bg-red-600 focus-within:bg-red-600 dark:focus:bg-red-700 dark:focus-within:bg-red-700"
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
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
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
