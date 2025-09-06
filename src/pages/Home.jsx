import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-orange-600">ShopeeClone</h1>
      <p className="mt-4 text-gray-600">Your one-stop shop for everything!</p>
      <Link to="/products" className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
        Shop Now
      </Link>
    </div>
  );
}

export default Home;
