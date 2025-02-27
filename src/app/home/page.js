"use client";
import Link from "next/link";
import React, { useState } from "react";

const HomePage = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-indigo-800 to-gray-900 text-white">
      <div className="w-full max-w-lg p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-300">
          Welcome to Product Search
        </h1>
        <p className="text-center text-gray-400 mb-4">
          Find and compare the best products from top brands.
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Products"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-4 pl-12 text-lg border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.242 1.656a5 5 0 1 1 3.536-8.536 5 5 0 0 1-3.536 8.536z" />
          </svg>
        </div>
        {query && (
          <p className="mt-4 text-center text-gray-300">
            Searching for: {query}
          </p>
        )}
        <div className="mt-6 flex justify-center">
          <Link href={`/search?query=${query}`}>
            <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
