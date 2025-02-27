import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-indigo-800 to-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo and Copyright */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-300">MyLogo</h2>
          <p className="text-sm mt-1 text-gray-400">
            © 2025 MyLogo. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a
            href="#privacy"
            className="text-gray-300 hover:text-white text-sm transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="text-gray-300 hover:text-white text-sm transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white text-sm transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
