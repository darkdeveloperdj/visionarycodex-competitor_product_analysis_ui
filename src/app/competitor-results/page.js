"use client";
import { useState, useEffect, useMemo } from "react";
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

const parseInvalidJson = (str) => {
  try {
    const validJson = str
      .replace(/"/g, '\\"') // Escape existing double quotes first
      .replace(/'/g, '"') // Replace single quotes with double quotes
      .replace(/\bTrue\b/g, "true")
      .replace(/\bFalse\b/g, "false");
    return JSON.parse(validJson);
  } catch (error) {
    console.error("Failed to parse JSON string:", str, error);
    return {};
  }
};

const CompetitorResults = () => {
  const dispatch = useDispatch();
  const {
    categoryName,
    brandName,
    allProducts: apiProducts,
    myCompanyAllProducts: myCompanyProducts,
    selectedProducts,
  } = useSelector((state) => state.products);

  const [selectedCompanyProducts, setSelectedCompanyProducts] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [activeFilters, setActiveFilters] = useState(new Set());
  const [mounted, setMounted] = useState(false);
  const [lastSentFilters, setLastSentFilters] = useState(null);
  const { matrixData } = useSelector((state) => state.products);
  const [iframeKey, setIframeKey] = useState(0);

  const query = categoryName || "Products";
  const category = categoryName ? categoryName.toLowerCase() : "electronics";
  const brandList = brandName
    ? brandName.split(",").map((brand) => brand.trim())
    : [];

  const allSelectedProducts = useMemo(
    () => [...selectedProducts, ...selectedCompanyProducts],
    [selectedProducts, selectedCompanyProducts]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  // Initialize active filters on mount
  useEffect(() => {
    const initialModels = [...selectedProducts, ...selectedCompanyProducts].map(
      (product) => product.model
    );
    setActiveFilters(new Set(initialModels));
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    const currentFilters = Array.from(activeFilters);
    if (JSON.stringify(currentFilters) !== JSON.stringify(lastSentFilters)) {
      dispatch(
        sendSelectedProductsRequest({ selectedProducts: currentFilters })
      );
      setLastSentFilters(currentFilters);
    }
  }, [dispatch, activeFilters, lastSentFilters]);

  useEffect(() => {
    if (matrixData?.message === "Products updated successfully") {
      setIframeKey((prev) => prev + 1);
    }
  }, [matrixData?.message]);

  const filteredProducts = useMemo(
    () => apiProducts.filter((product) => product.category === category),
    [apiProducts, category]
  );

  const allFeatures = useMemo(() => {
    const featuresSet = new Set();

    filteredProducts.forEach((product) => {
      const features = parseInvalidJson(product.features);
      Object.keys(features).forEach((f) => featuresSet.add(f));
    });

    myCompanyProducts.flat().forEach((product) => {
      const features = parseInvalidJson(product.features);
      Object.keys(features).forEach((f) => featuresSet.add(f));
    });

    return Array.from(featuresSet);
  }, [filteredProducts]);

  const toggleActiveFilter = (product) => {
    if (product.brand === "TechNova") return;
    setActiveFilters((prev) => {
      const newSet = new Set(prev);
      newSet.has(product.model)
        ? newSet.delete(product.model)
        : newSet.add(product.model);
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

  const handleResetFilters = () => {
    setSelectedFeatures([]);
    setSelectedCompanyProducts([]); // Add this line
    setActiveFilters(new Set(allSelectedProducts.map((p) => p.model)));
  };

  // Update handleCompanyProductToggle to manage activeFilters
  const handleCompanyProductToggle = (product) => {
    setSelectedCompanyProducts((prev) => {
      const newSelected = prev.some((p) => p.model === product.model)
        ? prev.filter((p) => p.model !== product.model)
        : [...prev, product];
      // Sync active filters
      setActiveFilters((prevFilters) => {
        const newFilters = new Set(prevFilters);
        newSelected.some((p) => p.model === product.model)
          ? newFilters.add(product.model)
          : newFilters.delete(product.model);
        return newFilters;
      });
      return newSelected;
    });
  };

  const activeSelectedProducts = useMemo(
    () =>
      allSelectedProducts.filter((product) => activeFilters.has(product.model)),
    [allSelectedProducts, activeFilters]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 text-gray-800 p-8 flex flex-col font-sans relative overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Lottie
          animationData={sparklesAnimation}
          loop={true}
          autoplay={true}
          className="w-full h-full"
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-purple-100/30" />
      </div>

      <div
        className={`flex gap-8 transform transition-all duration-1000 relative z-10 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Filter Panel */}
        <div className="w-80 p-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 animate-fadeInLeft">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            🔍 Comparison Filters
          </h2>

          {/* Company Products Filter */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4 text-lg text-gray-700">
              🏢 My Products
            </h3>
            <div className="space-y-2">
              {myCompanyProducts.flat().map((product) => (
                <label
                  key={product.model}
                  className="flex items-center w-full text-left p-3 rounded-xl transition-all duration-200 hover:bg-gray-50 border border-gray-200"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-purple-500"
                    checked={selectedCompanyProducts.some(
                      (p) => p.model === product.model
                    )}
                    onChange={() => handleCompanyProductToggle(product)}
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    {product.model}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Selected Products Filter */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4 text-lg text-gray-700">
              📦 Selected Products
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
                    disabled={product.brand === "TechNova"}
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    {product.model}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Feature Filter */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4 text-lg text-gray-700">
              ⚙️ Features
            </h3>
            <div className="space-y-2">
              {allFeatures.map((feature) => (
                <label
                  key={feature}
                  className={`flex items-center w-full text-left p-3 rounded-xl transition-all duration-200 ${
                    selectedFeatures.includes(feature)
                      ? "bg-purple-100 border-purple-300 shadow-md scale-[1.02]"
                      : "hover:bg-gray-50 border-gray-200 hover:scale-[1.01]"
                  } border`}
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-purple-500"
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

          <button
            onClick={handleResetFilters}
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            🔄 Reset Filters
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text animate-shake">
            📊 {query.charAt(0).toUpperCase() + query.slice(1)} Competitive
            Analysis
          </h2>

          {/* Feature Comparison Table */}
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
                        } hover:bg-gray-100 transition-colors`}
                      >
                        <td className="p-4 text-sm font-medium text-gray-700">
                          <div className="flex items-center gap-2">
                            {product.brand}
                            {product.brand === "TechNova" && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                Our Product
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-sm text-gray-600">
                          {product.model}
                        </td>
                        {selectedFeatures.map((feature) => (
                          <td
                            key={feature}
                            className="p-4 text-center text-2xl"
                          >
                            {features[feature] ? "✅" : "❌"}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Market Insights */}
          <div className="mb-12 animate-fadeInUp delay-200">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">
              💡 Market Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeSelectedProducts.map((product) => {
                const insights = parseInvalidJson(product.insights);
                return (
                  <div
                    key={product.model}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-all"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold text-gray-700">
                        {product.model}
                      </h4>
                      <span className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                        {product.brand}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          🚀 Popularity
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            insights.popularity === "High" ||
                            insights.popularity === "Very High"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {insights.popularity}
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
                          {insights.priceTrend}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">🛒 Demand</span>
                        <span
                          className={`text-sm font-medium ${
                            insights.demand === "High" ||
                            insights.demand === "Extreme"
                              ? "text-purple-600"
                              : "text-blue-600"
                          }`}
                        >
                          {insights.demand}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          🏆 Market Share
                        </span>
                        <span className="text-sm font-medium text-indigo-600">
                          {insights.marketShare}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data Report */}
          <div className="mb-12 animate-fadeInUp delay-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">
              📊 Analysis Report
            </h3>
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                key={iframeKey}
                className="w-full h-[450px] md:h-[600px]"
                src="https://lookerstudio.google.com/embed/reporting/100436a2-d3ff-410d-9318-8696fa4a79a1/page/gxYEF"
                frameBorder="0"
                allowFullScreen
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              ></iframe>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="animate-fadeInUp delay-500">
            <h3 className="text-2xl font-bold mb-6 text-gray-700">
              😊 Customer Feedback Analysis
            </h3>
            <div className="space-y-6">
              {activeSelectedProducts.map((product) => {
                const reviews = parseInvalidJson(product.reviews);
                const avgRating = reviews?.length
                  ? reviews.reduce((sum, review) => sum + review.rating, 0) /
                    reviews.length
                  : 0;

                return (
                  <div
                    key={product.model}
                    className="bg-white p-6 rounded-2xl border border-gray-200 hover:scale-[1.005] transition-all"
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
                          📝 {reviews?.length || 0} reviews
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {reviews?.map((review, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-purple-300 transition-all"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h5 className="font-medium text-gray-700">
                                👤 {review.user}
                              </h5>
                              <p className="text-xs text-gray-500">
                                📅 {new Date(review.date).toLocaleDateString()}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <StarRating rating={review.rating} />
                              <span className="text-2xl">
                                {review.rating >= 4
                                  ? "😍"
                                  : review.rating >= 3
                                  ? "😊"
                                  : "😞"}
                              </span>
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

export default CompetitorResults;
