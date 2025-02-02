import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">
                Kavi Raj Vedi
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/portfolio"
              className="text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/portfolio"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
