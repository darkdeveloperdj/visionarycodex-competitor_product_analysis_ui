"use client";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { productData, myCompanyProducts } from "../demo_data";

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

const allProducts = [...productData, ...myCompanyProducts];

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "Products";
  const category = searchParams.get("category") || "electronics";
  const brandList = searchParams.get("brands")
    ? [...searchParams.get("brands").split(","), "MyCompany"]
    : ["MyCompany"];

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [deselectedMyCompany, setDeselectedMyCompany] = useState(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProducts = useMemo(
    () => allProducts.filter((product) => product.category === category),
    [category]
  );

  const groupedProducts = useMemo(
    () =>
      brandList.reduce((acc, brand) => {
        acc[brand] = filteredProducts.filter((p) => p.brand === brand);
        return acc;
      }, {}),
    [brandList, filteredProducts]
  );

  const allFeatures = useMemo(
    () => [
      ...new Set(
        filteredProducts.flatMap((product) => Object.keys(product.features))
      ),
    ],
    [filteredProducts]
  );

  useEffect(() => {
    const myCompanyProduct = filteredProducts.find(
      (p) => p.brand === "MyCompany"
    );

    if (myCompanyProduct && !deselectedMyCompany.has(myCompanyProduct.model)) {
      setSelectedProducts((prev) => {
        const exists = prev.some((p) => p.model === myCompanyProduct.model);
        return exists ? prev : [...prev, myCompanyProduct];
      });
    }
  }, [category, filteredProducts, deselectedMyCompany]);

  const toggleProductSelection = (product) => {
    setSelectedProducts((prev) => {
      const newSelection = prev.some((p) => p.model === product.model)
        ? prev.filter((p) => p.model !== product.model)
        : [...prev, product];

      if (
        product.brand === "MyCompany" &&
        !newSelection.some((p) => p.model === product.model)
      ) {
        setDeselectedMyCompany((prev) => new Set([...prev, product.model]));
      }
      return newSelection;
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
    setSelectedProducts([]);
    setSelectedFeatures([]);
    setDeselectedMyCompany(new Set());
  };

  const trendData = {
    labels: brandList,
    datasets: [
      {
        label: "Market Growth (%)",
        data: brandList.map(() => Math.floor(Math.random() * 40) + 10),
        backgroundColor: [
          "rgba(99, 102, 241, 0.8)",
          "rgba(139, 92, 246, 0.8)",
          "rgba(168, 85, 247, 0.8)",
          "rgba(217, 70, 239, 0.8)",
        ],
        borderColor: [
          "rgba(99, 102, 241, 1)",
          "rgba(139, 92, 246, 1)",
          "rgba(168, 85, 247, 1)",
          "rgba(217, 70, 239, 1)",
        ],
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-gray-100 p-8 flex flex-col font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
        body {
          font-family: "Inter", sans-serif;
        }
      `}</style>

      <div
        className={`flex gap-8 transform transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Sidebar Filters */}
        <div className="w-80 p-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 animate-fadeInLeft">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
            🔍 Comparison Filters
          </h2>

          <div className="mb-8">
            <h3 className="font-semibold mb-4 text-lg text-purple-200">
              📦 Select Products
            </h3>
            {brandList.map((brand) => (
              <div key={brand} className="mb-4">
                <h4 className="text-md font-bold mb-2 text-indigo-200">
                  {brand === "MyCompany" ? "🚀 " : "🏷️ "}
                  {brand}
                </h4>
                <div className="space-y-2">
                  {groupedProducts[brand]?.map((product) => (
                    <label
                      key={product.model}
                      className={`flex items-center w-full text-left p-3 rounded-xl transition-all duration-200 ${
                        selectedProducts.some((p) => p.model === product.model)
                          ? "bg-indigo-600/80 text-white shadow-md scale-[1.02]"
                          : "hover:bg-white/10 text-gray-300 hover:scale-[1.01]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-purple-400 transition duration-150 ease-in-out"
                        checked={selectedProducts.some(
                          (p) => p.model === product.model
                        )}
                        onChange={() => toggleProductSelection(product)}
                      />
                      <span className="ml-3 text-sm">
                        {product.model}
                        {product.brand === "MyCompany" && (
                          <span className="ml-2 text-xs text-yellow-300">
                            (✨ Yours)
                          </span>
                        )}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="font-semibold mb-4 text-lg text-purple-200">
              🛠️ Feature Selection
            </h3>
            <div className="space-y-2">
              {allFeatures.map((feature) => (
                <label
                  key={feature}
                  className={`flex items-center w-full text-left p-3 rounded-xl transition-all duration-200 ${
                    selectedFeatures.includes(feature)
                      ? "bg-purple-600/80 text-white shadow-md scale-[1.02]"
                      : "hover:bg-white/10 text-gray-300 hover:scale-[1.01]"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-purple-400 transition duration-150 ease-in-out"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => toggleFeatureSelection(feature)}
                  />
                  <span className="ml-3 text-sm capitalize">{feature}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={handleResetFilters}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              🔄 Reset All Filters
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10">
          <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-300 bg-clip-text animate-shake">
            <span className="inline-block mr-2">📊</span>
            <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-300 bg-clip-text text-transparent">
              {query} Competitive Analysis
            </span>
          </h2>

          {/* Product Comparison Table */}
          <div className="mb-12 animate-fadeInUp delay-100">
            <h3 className="text-2xl font-bold mb-6 text-purple-200">
              📜 Feature Comparison Matrix
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-xl">
              <table className="w-full">
                <thead className="bg-indigo-600/50">
                  <tr>
                    <th className="p-4 text-left font-semibold text-purple-100 rounded-tl-2xl">
                      🏭 Brand
                    </th>
                    <th className="p-4 text-left font-semibold text-purple-100">
                      📛 Model
                    </th>
                    {selectedFeatures.map((feature) => (
                      <th
                        key={feature}
                        className="p-4 text-center font-semibold text-purple-100 rounded-tr-2xl"
                      >
                        {feature}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {selectedProducts.map((product, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-white/5" : "bg-white/10"
                      } last:rounded-b-2xl transition-all duration-200 hover:bg-white/15`}
                    >
                      <td className="p-4 text-sm font-medium">
                        <span className="flex items-center">
                          {product.brand}
                          {product.brand === "MyCompany" && (
                            <span className="ml-2 px-2 py-1 text-xs bg-purple-600/30 text-purple-300 rounded-full">
                              🎯 Your Product
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-300">
                        {product.model}
                      </td>
                      {selectedFeatures.map((feature) => (
                        <td key={feature} className="p-4 text-center text-2xl">
                          {product.features[feature] ? (
                            <span className="text-green-400">✅</span>
                          ) : (
                            <span className="text-red-400">❌</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Product Insights */}
          <div className="mb-12 animate-fadeInUp delay-200">
            <h3 className="text-2xl font-bold mb-6 text-purple-200">
              💡 Market Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {selectedProducts.map((product) => (
                <div
                  key={product.model}
                  className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-purple-200">
                      {product.model}
                    </h4>
                    {product.brand === "MyCompany" && (
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">
                        🚀 Popularity
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          product.insights.popularity === "High"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {product.insights.popularity === "High"
                          ? "📈 High"
                          : "📉 Low"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">
                        💰 Price Trend
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          product.insights.priceTrend === "Increasing"
                            ? "text-red-400"
                            : "text-green-400"
                        }`}
                      >
                        {product.insights.priceTrend === "Increasing"
                          ? "📈"
                          : "📉"}{" "}
                        {product.insights.priceTrend}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">🛒 Demand</span>
                      <span className="text-sm font-medium text-indigo-300">
                        {product.insights.demand === "High" ? "🔥 " : "🌱 "}
                        {product.insights.demand}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400">
                        🏆 Market Share
                      </span>
                      <span className="text-sm font-medium text-purple-300">
                        {product.insights.marketShare}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Positioning */}
          <div className="mb-12 animate-fadeInUp delay-300">
            <h3 className="text-2xl font-bold mb-6 text-purple-200">
              ⚔️ Competitive Positioning
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {selectedProducts
                .filter((p) => p.brand === "MyCompany")
                .map((myProduct) => (
                  <div
                    key={myProduct.model}
                    className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 p-6 rounded-2xl border border-white/10"
                  >
                    <h4 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">
                      🥊 Competitive Analysis: {myProduct.model}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProducts
                        .filter((p) => p.brand !== "MyCompany")
                        .map((competitor) => (
                          <div
                            key={competitor.model}
                            className="bg-white/5 p-4 rounded-xl border border-white/10 hover:scale-[1.01] transition-all duration-200"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <span className="font-medium text-purple-200">
                                  {myProduct.model}
                                </span>
                                <span className="text-gray-400">⚔️ vs ⚔️</span>
                                <span className="font-medium text-indigo-200">
                                  {competitor.model}
                                </span>
                              </div>
                              <span className="text-xs text-gray-400">
                                {competitor.brand}
                              </span>
                            </div>
                            {selectedFeatures.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                              >
                                <span
                                  className={`text-lg ${
                                    myProduct.features[feature]
                                      ? "text-green-400"
                                      : "text-red-400"
                                  }`}
                                >
                                  {myProduct.features[feature] ? "✅" : "❌"}
                                </span>
                                <span className="text-xs text-gray-400 px-2">
                                  {feature}
                                </span>
                                <span
                                  className={`text-lg ${
                                    competitor.features[feature]
                                      ? "text-green-400"
                                      : "text-red-400"
                                  }`}
                                >
                                  {competitor.features[feature] ? "✅" : "❌"}
                                </span>
                              </div>
                            ))}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Trend Analysis */}
          <div className="mb-12 animate-fadeInUp delay-400">
            <h3 className="text-2xl font-bold mb-6 text-purple-200">
              📈 Market Trends
            </h3>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:scale-[1.005] transition-all duration-300">
              <Bar
                data={trendData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      labels: { color: "#e2e8f0" },
                    },
                  },
                  scales: {
                    x: {
                      grid: { color: "rgba(255,255,255,0.05)" },
                      ticks: { color: "#cbd5e1" },
                    },
                    y: {
                      grid: { color: "rgba(255,255,255,0.05)" },
                      ticks: { color: "#cbd5e1" },
                    },
                  },
                }}
              />
            </div>
          </div>

          {/* Customer Reviews & Ratings */}
          <div className="mb-12 animate-fadeInUp delay-500">
            <h3 className="text-2xl font-bold mb-6 text-purple-200">
              😊 Customer Feedback Analysis
            </h3>
            <div className="space-y-6">
              {selectedProducts.map((product) => {
                const avgRating =
                  product.reviews.reduce(
                    (sum, review) => sum + review.rating,
                    0
                  ) / product.reviews.length;

                return (
                  <div
                    key={product.model}
                    className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:scale-[1.005] transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                      <h4 className="text-lg font-semibold text-purple-200 mb-2 md:mb-0">
                        💬 {product.model} Reviews
                      </h4>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <StarRating rating={avgRating} />
                          <span className="ml-2 text-sm text-gray-300">
                            ({avgRating.toFixed(1)}/5)
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">
                          📝 {product.reviews.length} reviews
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.reviews.map((review, index) => (
                        <div
                          key={index}
                          className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h5 className="font-medium text-gray-200">
                                👤 {review.user}
                              </h5>
                              <p className="text-xs text-gray-400">
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
                          <p className="text-sm text-gray-300 leading-relaxed">
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
