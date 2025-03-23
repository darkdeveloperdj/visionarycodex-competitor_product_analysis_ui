"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { category } from "../demo_data";
import Lottie from "lottie-react";
import analyticsAnimation from "../../../public/assets/animations/analytics-animation.json";
import sparklesAnimation from "../../../public/assets/animations/sparkles.json";
import "../../../public/assets/css/HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductName,
  setCompanyNamesInput,
} from "../store/product/productsSlice";

const categoryLabels = {
  electronics: "Electronics",
  fashion: "Fashion",
  home: "Home & Living",
  beauty: "Beauty & Health",
  sports: "Sports & Outdoors",
};

const HomePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { productName, companyNamesInput } = useSelector(
    (state) => state.products
  );
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(category[0]);
  const [showError, setShowError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Format input: trim, remove extra commas, and capitalize the first letter of each word.
  const formatBrandInput = (input) => {
    return input
      .split(",")
      .map((brand) => {
        const trimmed = brand.trim();
        if (!trimmed) return "";
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
      })
      .filter((brand) => brand !== "")
      .join(", ");
  };

  const handleInputChange = (value) => {
    // Replace multiple commas with a single comma and ensure spacing consistency.
    const formatted = value.replace(/,+/g, ",").replace(/,\s*/g, ", ");
    setQuery(formatted);
    setShowError(false);
  };

  const handleExampleClick = () => {
    const example = "Google,Apple,Samsung";
    setQuery(example);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedQuery = formatBrandInput(query);
    if (!formattedQuery) {
      setShowError(true);
      return;
    }
    // Save search parameters in Redux with formatted data.
    dispatch(setProductName(selectedCategory));
    dispatch(setCompanyNamesInput(formattedQuery));
    // Navigate using the submitted values.
    router.push(`/products-selection`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center p-4 font-sans relative overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-purple-100/30" />
      </div>

      {/* Main Content */}
      <div
        className={`w-full max-w-2xl p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 transform transition-all duration-1000 relative z-10 ${
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
          <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl font-extrabold text-center w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Competitor Pro Analytics
          </h1>
        </div>

        <p className="text-center text-gray-600 mb-8 text-lg transition-opacity duration-500 hover:opacity-80">
          Discover market insights and competitive intelligence across
          industries
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Category Selector */}
          <div className="animate-fadeInUp delay-100 relative group">
            <label className="block text-gray-700 text-sm font-medium mb-3">
              Product Category
            </label>
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-4 pl-6 pr-10 text-gray-700 bg-white/95 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none transition-all duration-300 hover:border-purple-400 hover:shadow-md"
                required
              >
                {category.map((cat) => (
                  <option
                    key={cat}
                    value={cat}
                    className="bg-white text-gray-700"
                  >
                    {categoryLabels[cat]}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 transition-transform group-hover:scale-110">
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
            <label className="block text-gray-700 text-sm font-medium mb-3">
              Choose Brands
            </label>
            <div className="relative group">
              <input
                type="text"
                placeholder="Example: Apple,Google"
                value={query}
                onChange={(e) => handleInputChange(e.target.value)}
                onBlur={(e) => setQuery(formatBrandInput(e.target.value))}
                className="w-full p-4 pl-12 pr-6 text-gray-700 bg-white/95 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:border-purple-400 hover:shadow-md"
                required
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500 transition-transform group-hover:scale-125">
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
            {showError ? (
              <p className="text-red-600 text-sm mt-2 ml-2 animate-shake">
                Please enter at least one brand name.
              </p>
            ) : (
              <p className="text-gray-500 text-sm mt-2 ml-2">
                Separate brand names with commas (e.g., Apple,Samsung,Google)
              </p>
            )}
          </div>

          {/* Example Data with Copy Icon */}
          <div className="mt-4">
            <div className="flex items-center gap-2">
              <span
                className="text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors text-sm underline hover:no-underline"
                onClick={handleExampleClick}
              >
                Google, Apple, Samsung
              </span>
              <button
                onClick={(e) => {
                  // No need for stopPropagation since buttons are separate
                  navigator.clipboard.writeText("Google,Apple,Samsung");
                  // Add visual feedback
                  e.target.classList.add("example-copied");
                  setTimeout(() => {
                    e.target.classList.remove("example-copied");
                  }, 1000);
                }}
                className="text-gray-400 hover:text-purple-600 transition-colors relative"
                title="Copy example brands"
              >
                <svg
                  className="w-4 h-4 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-gray-400 text-xs mt-1 ml-0.5">
              Click text to autofill or icon to copy
            </p>
          </div>

          {/* Search Preview */}
          {query && (
            <div className="animate-fadeInUp text-center p-4 bg-purple-50 rounded-lg border border-purple-200 hover:scale-[1.01] transition-transform duration-300 relative">
              <Lottie
                animationData={sparklesAnimation}
                loop={true}
                autoplay={true}
                className="absolute inset-0 w-full h-full opacity-20"
              />
              <p className="text-sm text-gray-700 relative z-10">
                Analyzing market for{" "}
                <span className="font-semibold text-purple-600 animate-pulse">
                  {query}
                </span>{" "}
                in{" "}
                <span className="font-semibold text-indigo-600">
                  {categoryLabels[selectedCategory]}
                </span>
              </p>
            </div>
          )}

          {/* CTA Button */}
          <div className="mt-8 animate-fadeInUp delay-300">
            <button
              type="submit"
              className="w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg hover:shadow-purple-300/30 transition-all duration-300 hover:scale-[1.02] hover:bg-gradient-to-br transform-gpu active:scale-95 relative overflow-hidden group"
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
