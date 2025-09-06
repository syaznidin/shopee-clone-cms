import ProductCard from "../components/ProductCard";

const dummyProducts = [
  { id: 1, name: "Wireless Earbuds", price: 99, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Smart Watch", price: 199, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Sneakers", price: 150, image: "https://via.placeholder.com/150" },
];

function Products() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
