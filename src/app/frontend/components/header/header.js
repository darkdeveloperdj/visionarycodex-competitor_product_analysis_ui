import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-indigo-800 to-gray-900 text-white py-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="w-12 h-12 mr-3 rounded-full border-2 border-white"
          />
          <Link
            href="/"
            className="text-2xl font-semibold text-gray-200 hover:text-white transition duration-300"
          >
            MyLogo
          </Link>
        </div>

        {/* Menu Section */}
        <nav className="flex space-x-6 text-lg">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
