"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sendSelectedProductsRequest,
  fetchCompetitorProductsRequest,
} from "../store/product/productsSlice";
import Lottie from "lottie-react";
import sparklesAnimation from "../../../public/assets/animations/sparkles.json";
import "../../../public/assets/css/SearchPage.css";

const StarRating = React.memo(({ rating }) => {
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
            <span className="text-gray-300">☆</span>
          )}
        </span>
      ))}
    </div>
  );
});

const FilterPanel = React.memo(
  ({
    myProducts,
    competitorItems,
    allFeatures,
    activeFilters,
    selectedFeatures,
    toggleActiveFilter,
    toggleFeatureSelection,
    handleResetFilters,
  }) => (
    <div className="w-80 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 animate-slideInLeft">
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        🔍 Filters
      </h2>
      {/* My Products */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-lg text-gray-700">
          🏢 My Products
        </h3>
        <div className="space-y-2">
          {myProducts.length ? (
            myProducts.map((product) => (
              <label
                key={product.model}
                className="flex items-center p-3 rounded-xl transition-transform duration-200 hover:scale-105 border border-gray-200 bg-gray-50"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={activeFilters.has(product.model)}
                  onChange={() => toggleActiveFilter(product)}
                />
                <span className="ml-3 text-sm text-gray-800">
                  {product.model}
                </span>
              </label>
            ))
          ) : (
            <p className="text-sm text-gray-500">No products available.</p>
          )}
        </div>
      </div>
      {/* Competitor Products */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-lg text-gray-700">
          📦 Competitor Products
        </h3>
        <div className="space-y-2">
          {competitorItems.length ? (
            competitorItems.map((product) => (
              <label
                key={product.model}
                className="flex items-center p-3 rounded-xl transition-transform duration-200 hover:scale-105 border border-gray-200 bg-gray-50"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={activeFilters.has(product.model)}
                  onChange={() => toggleActiveFilter(product)}
                />
                <span className="ml-3 text-sm text-gray-800">
                  {product.model}
                </span>
              </label>
            ))
          ) : (
            <p className="text-sm text-gray-500">No products available.</p>
          )}
        </div>
      </div>
      {/* Features */}
      <div className="mb-8">
        <h3 className="font-semibold mb-4 text-lg text-gray-700">
          ⚙️ Features
        </h3>
        <div className="space-y-2">
          {allFeatures.length ? (
            allFeatures.map((feature) => (
              <label
                key={feature}
                className={`flex items-center p-3 rounded-xl transition-transform duration-200 ${
                  selectedFeatures.includes(feature)
                    ? "bg-indigo-100 border-indigo-300 shadow-md scale-105"
                    : "bg-gray-50 border-gray-200 hover:scale-105"
                } border`}
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={selectedFeatures.includes(feature)}
                  onChange={() => toggleFeatureSelection(feature)}
                />
                <span className="ml-3 text-sm capitalize text-gray-800">
                  {feature}
                </span>
              </label>
            ))
          ) : (
            <p className="text-sm text-gray-500">No features available.</p>
          )}
        </div>
      </div>
      <button
        onClick={handleResetFilters}
        className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl font-semibold transition-transform duration-300 hover:scale-105 shadow-lg"
      >
        🔄 Reset Filters
      </button>
    </div>
  )
);

const FeatureComparisonTable = React.memo(
  ({ activeSelectedProducts, selectedFeatures }) => (
    <div className="mb-12 animate-fadeInUp delay-100">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">
        📜 Feature Matrix
      </h3>
      <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-indigo-100 to-purple-100">
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
              const features = product.features || {};
              return (
                <tr
                  key={product.model}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="p-4 text-sm font-medium text-gray-800">
                    <div className="flex items-center gap-2">
                      {product.isMyCompanyProduct ? (
                        <>
                          {product.competitorName}{" "}
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                            Our Product
                          </span>
                        </>
                      ) : (
                        product.competitorName
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">{product.model}</td>
                  {selectedFeatures.map((feature) => (
                    <td key={feature} className="p-4 text-center text-2xl">
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
  )
);

const MarketInsightsPanel = React.memo(({ activeSelectedProducts }) => (
  <div className="mb-12 animate-fadeInUp delay-200">
    <h3 className="text-2xl font-bold mb-6 text-gray-800">
      💡 Market Insights
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {activeSelectedProducts.map((product) => {
        const insights = product.insights || {};
        return (
          <div
            key={product.model}
            className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold text-gray-800">
                {product.model}
              </h4>
              <span className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                {product.competitorName}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">🚀 Popularity</span>
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
                <span className="text-sm text-gray-600">💰 Price Trend</span>
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
                    insights.demand === "High" || insights.demand === "Extreme"
                      ? "text-indigo-600"
                      : "text-blue-600"
                  }`}
                >
                  {insights.demand}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">🏆 Market Share</span>
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
));

const AnalysisReportPanel = React.memo(({ activeSelectedProducts }) => (
  <div className="mb-12 animate-fadeInUp delay-300">
    <h3 className="text-2xl font-bold mb-6 text-gray-800">
      📊 Analysis Report
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {activeSelectedProducts.map((product) => {
        const details = product.details || {};
        const reviewSentiment = details.reviewSentiment || {};
        const featureImportance = details.featureImportance || {};
        return (
          <div
            key={product.model}
            className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
          >
            <h4 className="text-xl font-semibold text-indigo-700 mb-4">
              {product.model} Analysis
            </h4>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-medium">Price:</span> ${details.price}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">User Rating:</span>{" "}
                {details.userRating}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Reviews:</span>{" "}
                {details.numberOfReviews}
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Special Features:</span>{" "}
                {details.specialFeatures}
              </p>
            </div>
            <div className="mt-6">
              <h5 className="text-lg font-semibold text-gray-800">
                Review Sentiment
              </h5>
              <div className="flex space-x-4 mt-2">
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-green-600">
                    {reviewSentiment.positive || "N/A"}
                  </span>
                  <span className="text-xs text-gray-500">Positive</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-gray-600">
                    {reviewSentiment.neutral || "N/A"}
                  </span>
                  <span className="text-xs text-gray-500">Neutral</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-red-600">
                    {reviewSentiment.negative || "N/A"}
                  </span>
                  <span className="text-xs text-gray-500">Negative</span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-lg font-semibold text-gray-800">
                Feature Importance
              </h5>
              <div className="flex space-x-4 mt-2">
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-indigo-600">
                    {featureImportance.price || "N/A"}
                  </span>
                  <span className="text-xs text-gray-500">Price</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-indigo-600">
                    {featureImportance.userRating || "N/A"}
                  </span>
                  <span className="text-xs text-gray-500">User Rating</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm font-medium text-indigo-600">
                    {featureImportance.specialFeatures || "N/A"}
                  </span>
                  <span className="text-xs text-gray-500">
                    Special Features
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
));

const CustomerReviewsPanel = React.memo(({ activeSelectedProducts }) => (
  <div className="animate-fadeInUp delay-500">
    <h3 className="text-2xl font-bold mb-6 text-gray-800">
      😊 Customer Feedback
    </h3>
    <div className="space-y-6">
      {activeSelectedProducts.map((product) => {
        let reviews = product.reviews;
        if (reviews && !Array.isArray(reviews)) reviews = [reviews];
        const avgRating =
          reviews && reviews.length
            ? reviews.reduce((sum, review) => sum + (review.rating || 0), 0) /
              reviews.length
            : 0;
        return (
          <div
            key={product.model}
            className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-2 md:mb-0">
                💬 {product.model} Reviews
              </h4>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <StarRating rating={avgRating} />
                  <span className="ml-2 text-sm text-gray-600">
                    ({avgRating.toFixed(1)}/5)
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  📝 {reviews?.length || 0} reviews
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reviews?.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-indigo-300 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="font-medium text-gray-800">
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
                  <p className="text-sm text-gray-700 leading-relaxed">
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
));

const CompetitorResults = () => {
  const dispatch = useDispatch();
  const {
    categoryName,
    brandName,
    selectedCompetitorBrands,
    competitorProducts,
  } = useSelector((state) => state.products);

  const myProducts = useMemo(
    () => competitorProducts.filter((p) => p.isMyCompanyProduct),
    [competitorProducts]
  );
  const competitorItems = useMemo(
    () => competitorProducts.filter((p) => !p.isMyCompanyProduct),
    [competitorProducts]
  );

  const [activeFilters, setActiveFilters] = useState(new Set());
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [lastSentFilters, setLastSentFilters] = useState(null);

  const query = categoryName || "Products";
  const category = categoryName ? categoryName.toLowerCase() : "electronics";

  // Fetch competitor products when competitor brands are selected
  useEffect(() => {
    if (selectedCompetitorBrands?.length > 0) {
      dispatch(
        fetchCompetitorProductsRequest({
          category_name: category,
          brand_name: brandName,
          selected_competitor_names: selectedCompetitorBrands,
        })
      );
    }
  }, [dispatch, selectedCompetitorBrands, category, brandName]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const allModels = competitorProducts.map((p) => p.model);
    setActiveFilters(new Set(allModels));
  }, [competitorProducts]);

  useEffect(() => {
    const currentFilters = Array.from(activeFilters);
    if (JSON.stringify(currentFilters) !== JSON.stringify(lastSentFilters)) {
      dispatch(
        sendSelectedProductsRequest({ selectedProducts: currentFilters })
      );
      setLastSentFilters(currentFilters);
    }
  }, [dispatch, activeFilters, lastSentFilters]);

  const allFeatures = useMemo(() => {
    const featuresSet = new Set();
    competitorProducts.forEach((product) => {
      const features = product.features || {};
      Object.keys(features).forEach((f) => featuresSet.add(f));
    });
    return Array.from(featuresSet);
  }, [competitorProducts]);

  const toggleActiveFilter = (product) => {
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
    const allModels = competitorProducts.map((p) => p.model);
    setSelectedFeatures([]);
    setActiveFilters(new Set(allModels));
  };

  const activeSelectedProducts = useMemo(
    () =>
      competitorProducts.filter((product) => activeFilters.has(product.model)),
    [competitorProducts, activeFilters]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 text-gray-800 p-8 flex flex-col font-sans relative overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Lottie
          animationData={sparklesAnimation}
          loop
          autoplay
          className="w-full h-full"
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-gray-100/40" />
      </div>
      <div
        className={`flex gap-8 transform transition-all duration-1000 relative z-10 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <FilterPanel
          myProducts={myProducts}
          competitorItems={competitorItems}
          allFeatures={allFeatures}
          activeFilters={activeFilters}
          selectedFeatures={selectedFeatures}
          toggleActiveFilter={toggleActiveFilter}
          toggleFeatureSelection={toggleFeatureSelection}
          handleResetFilters={handleResetFilters}
        />
        <div className="flex-1 p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200">
          <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            📊 {query.charAt(0).toUpperCase() + query.slice(1)} Competitive
            Analysis
          </h2>
          <FeatureComparisonTable
            activeSelectedProducts={activeSelectedProducts}
            selectedFeatures={selectedFeatures}
          />
          <MarketInsightsPanel
            activeSelectedProducts={activeSelectedProducts}
          />
          <AnalysisReportPanel
            activeSelectedProducts={activeSelectedProducts}
          />
          <CustomerReviewsPanel
            activeSelectedProducts={activeSelectedProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default CompetitorResults;
