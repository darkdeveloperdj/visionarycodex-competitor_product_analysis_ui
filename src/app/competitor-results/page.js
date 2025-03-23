"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  setSelectedProducts,
  sendSelectedProductsRequest,
} from "../store/product/productsSlice";
import Lottie from "lottie-react";
import sparklesAnimation from "../../../public/assets/animations/sparkles.json";
import "../../../public/assets/css/SearchPage.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <span key={index} className="text-xl">
          {index < fullStars ? (
            "⭐"
          ) : index === fullStars && hasHalfStar ? (
            "🌟½"
          ) : (
            <span className="text-gray-400">☆</span>
          )}
        </span>
      ))}
    </div>
  );
};

// Utility function to parse strings that aren’t valid JSON.
const parseInvalidJson = (str) => {
  try {
    const validJson = str
      .replace(/'/g, '"')
      .replace(/\bTrue\b/g, "true")
      .replace(/\bFalse\b/g, "false");
    return JSON.parse(validJson);
  } catch (error) {
    console.error("Failed to parse JSON string:", str, error);
    return {};
  }
};

const SearchPage = () => {
  const dispatch = useDispatch();
  // Read search parameters from Redux state
  const {
    productName,
    companyNamesInput,
    allProducts: apiProducts,
    selectedProducts,
  } = useSelector((state) => state.products);

  // Use Redux values; fallback values provided if undefined.
  const query = productName || "Products";
  // Convert productName to lowercase for filtering (adjust as needed)
  const category = productName ? productName.toLowerCase() : "electronics";
  // Convert the company names input into an array
  const brandList = companyNamesInput
    ? companyNamesInput.split(",").map((brand) => brand.trim())
    : [];

  const [selectedFeatures, setSelectedFeatures] = useState([]);
  // activeFilters holds a set of product models that are currently active in filtering.
  const [activeFilters, setActiveFilters] = useState(new Set());
  const [mounted, setMounted] = useState(false);

  // Inside the SearchPage component
  const { matrixData } = useSelector((state) => state.products);
  const [iframeKey, setIframeKey] = useState(0);

  const hasSentRequest = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!hasSentRequest.current) {
      const selectedModels = selectedProducts.map((product) => product.model);
      dispatch(
        sendSelectedProductsRequest({ selectedProducts: selectedModels })
      );
      hasSentRequest.current = true;
    }
  }, [dispatch, selectedProducts]);
  // Add this effect to refresh iframe when matrixData changes
  useEffect(() => {
    if (matrixData?.message === "Products updated successfully") {
      // Force iframe remount by changing key
      setIframeKey((prev) => prev + 1);
    }
  }, [matrixData?.message]);

  // Filter products by category from Redux
  const filteredProducts = useMemo(
    () => apiProducts.filter((product) => product.category === category),
    [apiProducts, category]
  );

  // Determine available features from filtered products.
  const allFeatures = useMemo(
    () => [
      ...new Set(
        filteredProducts.flatMap((product) =>
          Object.keys(parseInvalidJson(product.features))
        )
      ),
    ],
    [filteredProducts]
  );

  // Whenever selectedProducts change, reset activeFilters to include all selected products.
  useEffect(() => {
    setActiveFilters(new Set(selectedProducts.map((product) => product.model)));
  }, [selectedProducts]);

  const toggleActiveFilter = (product) => {
    setActiveFilters((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(product.model)) {
        newSet.delete(product.model);
      } else {
        newSet.add(product.model);
      }
      return newSet;
    });
  };

  const toggleFeatureSelection = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  // Reset feature selections and active filters (keeping selected products intact)
  const handleResetFilters = () => {
    setSelectedFeatures([]);
    setActiveFilters(new Set(selectedProducts.map((p) => p.model)));
  };

  // Only active products are shown in the comparison table.
  const activeSelectedProducts = useMemo(
    () =>
      selectedProducts.filter((product) => activeFilters.has(product.model)),
    [selectedProducts, activeFilters]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 text-gray-800 p-8 flex flex-col font-sans relative overflow-hidden">
      {/* Sparkles Background Animation */}
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
        className={`flex gap-8 transform transition-all duration-1000 relative z-10 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Sidebar Filters */}
        <div className="w-80 p-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 animate-fadeInLeft">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            🔍 Comparison Filters
          </h2>

          {/* Selected Products Section */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4 text-lg text-gray-700">
              Selected Products
            </h3>
            <div className="space-y-2">
              {selectedProducts.map((product) => (
                <label
                  key={product.model}
                  className="flex items-center w-full text-left p-3 rounded-xl transition-all duration-200 hover:bg-gray-50 border border-gray-200"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-purple-500"
                    checked={activeFilters.has(product.model)}
                    onChange={() => toggleActiveFilter(product)}
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    {product.model}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Feature Selection Section */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4 text-lg text-gray-700">
              Feature Selection
            </h3>
            <div className="space-y-2">
              {allFeatures.map((feature) => (
                <label
                  key={feature}
                  className={`flex items-center w-full text-left p-3 rounded-xl transition-all duration-200 ${
                    selectedFeatures.includes(feature)
                      ? "bg-purple-100 border border-purple-300 shadow-md scale-[1.02]"
                      : "hover:bg-gray-50 border border-gray-200 hover:scale-[1.01]"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-purple-500 transition duration-150 ease-in-out"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => toggleFeatureSelection(feature)}
                  />
                  <span className="ml-3 text-sm capitalize text-gray-700">
                    {feature}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={handleResetFilters}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              🔄 Reset All Filters
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text animate-shake">
            📊 {query.charAt(0).toUpperCase() + query.slice(1)} Competitive
            Analysis
          </h2>

          {/* Product Comparison Table */}
          <div className="mb-12 animate-fadeInUp delay-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">
              📜 Feature Comparison Matrix
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full">
                <thead className="bg-indigo-100">
                  <tr>
                    <th className="p-4 text-left font-semibold text-gray-700 rounded-tl-2xl">
                      🏭 Brand
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      📛 Model
                    </th>
                    {selectedFeatures.map((feature) => (
                      <th
                        key={feature}
                        className="p-4 text-center font-semibold text-gray-700 rounded-tr-2xl"
                      >
                        {feature}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {activeSelectedProducts.map((product, index) => {
                    const features = parseInvalidJson(product.features);
                    return (
                      <tr
                        key={index}
                        className={`${
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        } last:rounded-b-2xl transition-all duration-200 hover:bg-gray-100`}
                      >
                        <td className="p-4 text-sm font-medium">
                          <span className="flex items-center text-gray-700">
                            {product.brand}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-gray-600">
                          {product.model}
                        </td>
                        {selectedFeatures.map((feature) => (
                          <td
                            key={feature}
                            className="p-4 text-center text-2xl"
                          >
                            {features[feature] ? (
                              <span className="text-green-600">✅</span>
                            ) : (
                              <span className="text-red-600">❌</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Product Insights */}
          <div className="mb-12 animate-fadeInUp delay-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">
              💡 Market Insights
            </h3>
            <div
              className={`grid gap-4 ${
                activeSelectedProducts.length === 1
                  ? "grid-cols-1"
                  : activeSelectedProducts.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              }`}
            >
              {activeSelectedProducts.map((product) => {
                const insights = parseInvalidJson(product.insights);
                return (
                  <div
                    key={product.model}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-700">
                        {product.model}
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          🚀 Popularity
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            insights.popularity === "High"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {insights.popularity === "High"
                            ? "📈 High"
                            : "📉 Low"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          💰 Price Trend
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            insights.priceTrend === "Increasing"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {insights.priceTrend === "Increasing" ? "📈" : "📉"}{" "}
                          {insights.priceTrend}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">🛒 Demand</span>
                        <span className="text-sm font-medium text-indigo-600">
                          {insights.demand === "High" ? "🔥" : "🌱"}{" "}
                          {insights.demand}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          🏆 Market Share
                        </span>
                        <span className="text-sm font-medium text-purple-600">
                          {insights.marketShare}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Looker Studio Report */}
          <div className="mb-12 animate-fadeInUp delay-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">
              📊 Data Report
            </h3>
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                key={iframeKey}
                width="600"
                height="450"
                className="w-full h-[450px] md:h-[600px] object-cover"
                src="https://lookerstudio.google.com/embed/reporting/100436a2-d3ff-410d-9318-8696fa4a79a1/page/gxYEF"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              ></iframe>
            </div>
          </div>

          {/* Customer Reviews & Ratings */}
          <div className="mb-12 animate-fadeInUp delay-500">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">
              😊 Customer Feedback Analysis
            </h3>
            <div className="space-y-6">
              {activeSelectedProducts.map((product) => {
                const reviews = parseInvalidJson(product.reviews);
                const avgRating =
                  Array.isArray(reviews) && reviews.length > 0
                    ? reviews.reduce((sum, review) => sum + review.rating, 0) /
                      reviews.length
                    : 0;

                return (
                  <div
                    key={product.model}
                    className="bg-white p-6 rounded-2xl border border-gray-200 hover:scale-[1.005] transition-all duration-300 shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2 md:mb-0">
                        💬 {product.model} Reviews
                      </h4>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <StarRating rating={avgRating} />
                          <span className="ml-2 text-sm text-gray-500">
                            ({avgRating.toFixed(1)}/5)
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          📝 {Array.isArray(reviews) ? reviews.length : 0}{" "}
                          reviews
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Array.isArray(reviews) &&
                        reviews.map((review, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-300"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h5 className="font-medium text-gray-700">
                                  👤 {review.user}
                                </h5>
                                <p className="text-xs text-gray-500">
                                  📅{" "}
                                  {new Date(review.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                    }
                                  )}
                                </p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <StarRating rating={review.rating} />
                                {review.rating >= 4 ? (
                                  <span className="text-2xl">😍</span>
                                ) : review.rating >= 3 ? (
                                  <span className="text-2xl">😊</span>
                                ) : (
                                  <span className="text-2xl">😞</span>
                                )}
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              💭 {review.comment}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
