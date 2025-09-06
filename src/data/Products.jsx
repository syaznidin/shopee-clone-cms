// src/data/products.js
const dummyProducts = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 500) + 50,
  image: "https://via.placeholder.com/200",
}));

export default dummyProducts;
