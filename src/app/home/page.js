"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { category } from "../demo_data";
import Lottie from "lottie-react";
import analyticsAnimation from "../../../public/assets/animations/analytics-animation.json";
import sparklesAnimation from "../../../public/assets/animations/sparkles.json";
import "../../../public/assets/css/HomePage.css"; // Import the CSS

const categoryLabels = {
  electronics: "Electronics",
  fashion: "Fashion",
  home: "Home & Living",
  beauty: "Beauty & Health",
  sports: "Sports & Outdoors",
};

const HomePage = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(category[0]);
  const [showError, setShowError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setShowError(true);
      return;
    }
    router.push(
      `/competitor-selection?query=${encodeURIComponent(
        query
      )}&category=${selectedCategory}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Sparkles Background */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Lottie
          animationData={sparklesAnimation}
          loop={true}
          autoplay={true}
          className="w-full h-full"
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-transparent to-purple-900/30" />
      </div>

      {/* Main Content */}
      <div
        className={`w-full max-w-2xl p-8 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10
        transform transition-all duration-1000 relative z-10 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header Animation */}
        <div className="relative h-48 mb-8 -mt-12">
          <Lottie
            animationData={analyticsAnimation}
            loop={true}
            autoplay={true}
            className="h-full w-full"
          />
          <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl font-extrabold text-center w-full bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-300 bg-clip-text text-transparent">
            Competitor Pro Analytics
          </h1>
        </div>

        <p className="text-center text-gray-300 mb-8 text-lg transition-opacity duration-500 hover:opacity-80">
          Discover market insights and competitive intelligence across
          industries
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Category Selector */}
          <div className="animate-fadeInUp delay-100 relative group">
            <label className="block text-purple-200 text-sm font-medium mb-3">
              Product Category
            </label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-4 pl-6 pr-10 text-gray-100 bg-white/5 border border-white/10 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none transition-all duration-300 hover:border-purple-400/30 hover:scale-[1.01] group-hover:shadow-purple-500/10"
                required
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
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400 transition-transform group-hover:scale-110">
                <svg
                  className="w-5 h-5 transition-transform group-hover:rotate-180"
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
          <div className="animate-fadeInUp delay-200">
            <label className="block text-purple-200 text-sm font-medium mb-3">
              Product Search
            </label>
            <div className="relative group">
              <input
                type="text"
                placeholder="Enter product name or keyword..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowError(false);
                }}
                className="w-full p-4 pl-12 pr-6 text-gray-100 bg-white/5 border border-white/10 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-400/30 hover:scale-[1.01] group-hover:shadow-purple-500/10"
                required
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 transition-transform group-hover:scale-125">
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
            {showError && (
              <p className="text-red-400 text-sm mt-2 ml-2 animate-shake">
                Please enter a product name or keyword
              </p>
            )}
          </div>

          {/* Search Preview */}
          {query && (
            <div className="animate-fadeInUp text-center p-4 bg-purple-900/20 rounded-lg border border-purple-400/20 hover:scale-[1.01] transition-transform duration-300 relative">
              <Lottie
                animationData={sparklesAnimation}
                loop={true}
                autoplay={true}
                className="absolute inset-0 w-full h-full opacity-20"
              />
              <p className="text-sm text-purple-200 relative z-10">
                Analyzing market for{" "}
                <span className="font-semibold text-purple-300 animate-pulse">
                  {query}
                </span>{" "}
                in{" "}
                <span className="font-semibold text-indigo-300">
                  {categoryLabels[selectedCategory]}
                </span>
              </p>
            </div>
          )}

          {/* CTA Button */}
          <div className="mt-8 animate-fadeInUp delay-300">
            <button
              type="submit"
              className="w-full px-8 py-4 text-lg font-semibold text-gray-100 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] hover:bg-gradient-to-br transform-gpu active:scale-95 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Search and Select Competitor
                <Lottie
                  animationData={sparklesAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-8 h-8 ml-3"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
