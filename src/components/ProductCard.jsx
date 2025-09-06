function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="border rounded-lg shadow p-4 text-center">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
      <p className="text-orange-600 font-semibold mt-1">${product.price}</p>
    </div>
  );
}

export default ProductCard;
