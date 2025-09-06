import { useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "../components/ProductCard";
import dummyProducts from "../data/Products";

function Home() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 48;

  const filteredProducts = dummyProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Pagination Component
  const Pagination = () => (
    <div className="flex justify-center items-center mt-8 space-x-2">
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-4 py-2 rounded ${
            currentPage === i + 1
              ? "bg-orange-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-6">
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="flex w-full max-w-2xl items-center border rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-grow px-4 py-3 text-black placeholder-gray-400 focus:outline-none"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1); // reset to first page when searching
              }}
            />
            <button className="bg-orange-500 text-white px-4 py-3 hover:bg-orange-600">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Pagination (Top) */}
        {totalPages > 1 && <Pagination />}

        {/* Product Grid */}
        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 w-full mt-6">
            {paginatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">No products found.</p>
        )}

        {/* Pagination (Bottom) */}
        {totalPages > 1 && <Pagination />}
      </div>
    </div>
  );
}

export default Home;
