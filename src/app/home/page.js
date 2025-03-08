"use client";
import Link from "next/link";
import React, { useState } from "react";
import { category } from "../demo_data";

const categoryLabels = {
  electronics: "Electronics",
  fashion: "Fashion",
  home: "Home & Living",
  beauty: "Beauty & Health",
  sports: "Sports & Outdoors",
};

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(category[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4 font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
        body {
          font-family: "Inter", sans-serif;
        }
      `}</style>

      <div className="w-full max-w-2xl p-8 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-300 bg-clip-text text-transparent">
          Competitor Pro Analytics
        </h1>
        <p className="text-center text-gray-300 mb-8 text-lg">
          Discover market insights and competitive intelligence across
          industries
        </p>

        <div className="space-y-8">
          {/* Category Selector */}
          <div>
            <label className="block text-purple-200 text-sm font-medium mb-3">
              Product Category
            </label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-4 pl-6 pr-10 text-gray-100 bg-white/5 border border-white/10 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none transition-all duration-200 hover:border-purple-400/30"
              >
                {category.map((cat) => (
                  <option
                    key={cat}
                    value={cat}
                    className="bg-gray-800 text-gray-100"
                  >
                    {categoryLabels[cat]}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Search Input */}
          <div>
            <label className="block text-purple-200 text-sm font-medium mb-3">
              Product Search
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter product name or keyword..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-4 pl-12 pr-6 text-gray-100 bg-white/5 border border-white/10 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 hover:border-purple-400/30"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Search Preview */}
          {query && (
            <div className="text-center p-4 bg-purple-900/20 rounded-lg border border-purple-400/20">
              <p className="text-sm text-purple-200">
                Analyzing market for{" "}
                <span className="font-semibold text-purple-300">{query}</span>{" "}
                in{" "}
                <span className="font-semibold text-indigo-300">
                  {categoryLabels[selectedCategory]}
                </span>
              </p>
            </div>
          )}

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href={`/competitor-selection?query=${query}&category=${selectedCategory}`}
              className="block w-full transform transition-transform duration-200 hover:scale-[1.02]"
            >
              <button className="w-full px-8 py-4 text-lg font-semibold text-gray-100 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Generate Competitive Analysis
                <span className="ml-3 text-purple-200">→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
