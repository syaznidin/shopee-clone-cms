import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-orange-500 shadow-md w-full">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-gray-200"
        >
          ShopeeClone
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-200 font-medium">
            Home
          </Link>
          <Link
            to="/products"
            className="text-white hover:text-gray-200 font-medium"
          >
            Products
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-gray-200 font-medium"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay (dark background) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-orange-600 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-orange-500">
          <h2 className="text-white font-bold text-lg">Menu</h2>
          <button
            className="text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col space-y-4 px-4 py-6">
          <Link
            to="/"
            className="text-white font-medium hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-white font-medium hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/login"
            className="text-white font-medium hover:text-gray-200"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
