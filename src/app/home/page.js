"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import analyticsAnimation from "../../../public/assets/animations/analytics-animation.json";
import sparklesAnimation from "../../../public/assets/animations/sparkles.json";
import "../../../public/assets/css/HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryName, setBrandName } from "../store/product/productsSlice";
import { fetchCategoryListRequest } from "../store/product/productsSlice";

// Helper function to capitalize each word
const formatText = (input) => {
  return input
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const HomePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.products.categoryList);

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showError, setShowError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showCopiedFeedback, setShowCopiedFeedback] = useState(false);

  // On mount, dispatch the fetch for category list and set mounted flag.
  useEffect(() => {
    setMounted(true);
    dispatch(fetchCategoryListRequest());
  }, [dispatch]);

  // Once the categoryList is loaded, set the default selected category (capitalized)
  useEffect(() => {
    if (categoryList && categoryList.length > 0 && !selectedCategory) {
      setSelectedCategory(formatText(categoryList[0].categoryName));
    }
  }, [categoryList, selectedCategory]);

  const formatCompanyInput = (input) => {
    return input
      .trim()
      .split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleInputChange = (value) => {
    setQuery(value);
    setShowError(false);
  };

  const handleExampleClick = () => {
    const example = "Apple";
    setQuery(example);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedQuery = formatCompanyInput(query);
    if (!formattedQuery) {
      setShowError(true);
      return;
    }
    dispatch(setCategoryName(selectedCategory));
    dispatch(setBrandName(formattedQuery));
    router.push(`/competitor-brands-selection`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center p-4 font-sans relative overflow-hidden">
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

      <div
        className={`w-full max-w-2xl p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 transform transition-all duration-1000 relative z-10 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
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
          <div className="animate-fadeInUp delay-100 relative group">
            <label className="block text-gray-700 text-sm font-medium mb-3">
              Product Category
            </label>
            <div className="relative">
              <select
                name="category_name"
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(formatText(e.target.value))
                }
                className="w-full p-4 pl-6 pr-10 text-gray-700 bg-white/95 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none transition-all duration-300 hover:border-purple-400 hover:shadow-md"
                required
              >
                {categoryList && categoryList.length > 0 ? (
                  categoryList.map((cat) => {
                    const formattedCategory = formatText(cat.categoryName);
                    return (
                      <option
                        key={cat.id}
                        value={formattedCategory}
                        className="bg-white text-gray-700"
                      >
                        {formattedCategory}
                      </option>
                    );
                  })
                ) : (
                  <option value="" disabled>
                    Loading categories...
                  </option>
                )}
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

          <div className="animate-fadeInUp delay-200">
            <label className="block text-gray-700 text-sm font-medium mb-3">
              Enter Your Brand
            </label>
            <div className="relative group">
              <input
                name="brand_name"
                type="text"
                placeholder="Example: Apple"
                value={query}
                onChange={(e) => handleInputChange(e.target.value)}
                onBlur={(e) => setQuery(formatCompanyInput(e.target.value))}
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
                Please enter your brand name.
              </p>
            ) : (
              <p className="text-gray-500 text-sm mt-2 ml-2">
                Enter your brand name
              </p>
            )}
          </div>

          <div className="mt-4 relative">
            <div className="flex items-center gap-2">
              <span
                className="text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors text-sm underline hover:no-underline"
                onClick={handleExampleClick}
              >
                Apple
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigator.clipboard.writeText("Apple");
                  e.target.classList.add("example-copied");
                  setShowCopiedFeedback(true);
                  setTimeout(() => {
                    setShowCopiedFeedback(false);
                    e.target.classList.remove("example-copied");
                  }, 1500);
                }}
                className="text-gray-400 hover:text-purple-600 transition-colors relative"
                title="Copy example brand"
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

            <div
              className={`absolute left-full ml-2 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                showCopiedFeedback ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-purple-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Copied!
              </div>
            </div>

            <p className="text-gray-400 text-xs mt-1 ml-0.5">
              Click text to autofill or icon to copy
            </p>
          </div>

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
                  {selectedCategory}
                </span>
              </p>
            </div>
          )}

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
