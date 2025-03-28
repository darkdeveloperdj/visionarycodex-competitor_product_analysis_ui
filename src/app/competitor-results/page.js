"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sendSelectedProductsRequest,
  fetchCompetitorProductsRequest,
} from "../store/product/productsSlice";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable"; // Explicit import of autoTable.
import { FaFilePdf, FaFileCsv } from "react-icons/fa"; // Import PDF and CSV icons.
import sparklesAnimation from "../../../public/assets/animations/sparkles.json";
import "../../../public/assets/css/SearchPage.css";

// Helper function to format percentage values.
const formatPercentage = (value) => {
  if (!value) return "N/A";
  const numberValue = parseFloat(value.replace("%", ""));
  return isNaN(numberValue) ? "N/A" : numberValue.toFixed(2) + "%";
};

// Recursive function to flatten an object (used for CSV export).
const flattenObject = (obj, prefix = "") => {
  let result = {};
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(result, flattenObject(value, newKey));
    } else if (Array.isArray(value)) {
      if (value.length > 0 && typeof value[0] === "object") {
        result[newKey] = value.map((v) => JSON.stringify(v)).join(" | ");
      } else {
        result[newKey] = value.join(" | ");
      }
    } else {
      result[newKey] = value;
    }
  }
  return result;
};

// Custom hook for filter state management.
const useFilters = (initialProducts) => {
  const [activeFilters, setActiveFilters] = useState(new Set());
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  useEffect(() => {
    const allModels = initialProducts.map((p) => p.model);
    setActiveFilters(new Set(allModels));
  }, [initialProducts]);
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
  const resetFilters = (allModels) => {
    setSelectedFeatures([]);
    setActiveFilters(new Set(allModels));
  };
  return {
    activeFilters,
    selectedFeatures,
    toggleActiveFilter,
    toggleFeatureSelection,
    resetFilters,
  };
};

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
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-80 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-300 space-y-6"
    >
      <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        🔍 Filters
      </h2>
      {/* My Products */}
      <div>
        <h3 className="font-semibold text-lg text-gray-700 mb-2">
          🏢 My Products
        </h3>
        <div className="space-y-2">
          {myProducts.length ? (
            myProducts.map((product) => (
              <label
                key={product.model}
                className="flex items-center p-2 rounded-md border border-gray-200 bg-gray-50 hover:scale-105 transition-transform duration-200"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={activeFilters.has(product.model)}
                  onChange={() => toggleActiveFilter(product)}
                />
                <span className="ml-2 text-sm text-gray-800">
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
      <div>
        <h3 className="font-semibold text-lg text-gray-700 mb-2">
          📦 Competitor Products
        </h3>
        <div className="space-y-2">
          {competitorItems.length ? (
            competitorItems.map((product) => (
              <label
                key={product.model}
                className="flex items-center p-2 rounded-md border border-gray-200 bg-gray-50 hover:scale-105 transition-transform duration-200"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={activeFilters.has(product.model)}
                  onChange={() => toggleActiveFilter(product)}
                />
                <span className="ml-2 text-sm text-gray-800">
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
      <div>
        <h3 className="font-semibold text-lg text-gray-700 mb-2">
          ⚙️ Features
        </h3>
        <div className="space-y-2">
          {allFeatures.length ? (
            allFeatures.map((feature) => (
              <label
                key={feature}
                className={`flex items-center p-2 rounded-md border ${
                  selectedFeatures.includes(feature)
                    ? "bg-indigo-100 border-indigo-300 shadow-md scale-105"
                    : "bg-gray-50 border-gray-200 hover:scale-105"
                } transition-transform duration-200`}
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={selectedFeatures.includes(feature)}
                  onChange={() => toggleFeatureSelection(feature)}
                />
                <span className="ml-2 text-sm capitalize text-gray-800">
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
        className="w-full py-2 mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-md font-semibold transition-transform duration-300 hover:scale-105 shadow-md"
      >
        🔄 Reset Filters
      </button>
    </motion.div>
  )
);

const FeatureComparisonTable = React.memo(
  ({ activeSelectedProducts, selectedFeatures }) => (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        📜 Feature Matrix
      </h3>
      <div className="overflow-x-auto rounded-2xl border border-gray-300 shadow-md">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-indigo-100 to-purple-100">
            <tr>
              <th className="p-3 text-left font-semibold text-gray-700">
                Thumbnail
              </th>
              <th className="p-3 text-left font-semibold text-gray-700">
                🏭 Brand
              </th>
              <th className="p-3 text-left font-semibold text-gray-700">
                📛 Model
              </th>
              {selectedFeatures.map((feature) => (
                <th
                  key={feature}
                  className="p-3 text-center font-semibold text-gray-700"
                >
                  {feature
                    .split(/(?=[A-Z])/)
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
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
                  <td className="p-3 text-center">
                    {features.thumbnail ? (
                      <img
                        src={features.thumbnail}
                        alt={product.model}
                        className="h-12 w-12 object-cover rounded"
                      />
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="p-3 text-sm font-medium text-gray-800">
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
                  <td className="p-3 text-sm text-gray-600">{product.model}</td>
                  {selectedFeatures.map((feature) => (
                    <td key={feature} className="p-3 text-sm text-center">
                      {(() => {
                        const value = features[feature];
                        if (value === undefined || value === null) return "N/A";
                        if (typeof value === "boolean")
                          return value ? "✅" : "❌";
                        if (Array.isArray(value)) return value.join(", ");
                        return value.toString();
                      })()}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
);

const MarketInsightsPanel = React.memo(({ activeSelectedProducts }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="mb-12"
  >
    <h3 className="text-2xl font-bold text-gray-800 mb-4">
      💡 Market Insights
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {activeSelectedProducts.map((product) => {
        const insights = product.insights || {};
        return (
          <div
            key={product.model}
            className="bg-white p-6 rounded-2xl border border-gray-300 hover:shadow-lg transition-shadow space-y-3"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold text-gray-800">
                {product.model}
              </h4>
              <span className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                {product.competitorName}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="w-1/3 text-sm text-gray-600">
                  🚀 Popularity
                </span>
                <span className="w-2/3 text-sm font-medium text-right">
                  {insights.popularity || "N/A"}
                </span>
              </div>
              <hr className="border-t border-gray-200" />
              <div className="flex justify-between items-center">
                <span className="w-1/3 text-sm text-gray-600">
                  💰 Price Trend
                </span>
                <span className="w-2/3 text-sm font-medium text-right">
                  {insights.priceTrend ||
                    "Unable to determine price trend from the given data. Requires external web search."}
                </span>
              </div>
              <hr className="border-t border-gray-200" />
              <div className="flex justify-between items-center">
                <span className="w-1/3 text-sm text-gray-600">🛒 Demand</span>
                <span className="w-2/3 text-sm font-medium text-right">
                  {insights.demand || "N/A"}
                </span>
              </div>
              <hr className="border-t border-gray-200" />
              <div className="flex justify-between items-center">
                <span className="w-1/3 text-sm text-gray-600">
                  🏆 Availability
                </span>
                <span className="w-2/3 text-sm font-medium text-right text-purple-600">
                  {insights.marketShare || insights.Availability || "N/A"}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </motion.div>
));

const AnalysisReportPanel = React.memo(({ activeSelectedProducts }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="mb-12"
  >
    <h3 className="text-2xl font-bold text-gray-800 mb-4">
      📊 Analysis Report
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {activeSelectedProducts.map((product) => {
        const details = product.details || {};
        const reviewSentiment = details.reviewSentiment || {};
        const featureImportance = details.featureImportance || {};
        return (
          <div
            key={product.model}
            className="bg-white p-6 rounded-2xl border border-gray-300 hover:shadow-lg transition-shadow space-y-3"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold text-gray-800">
                {product.model}
              </h4>
              <span className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                {product.competitorName}
              </span>
            </div>
            {/* Main Details Table */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="w-1/3 text-sm text-gray-600">Price</span>
                <span className="w-2/3 text-sm font-medium text-right">
                  {Array.isArray(details.price)
                    ? details.price.join(", ")
                    : details.price || "N/A"}
                </span>
              </div>
              <hr className="border-t border-gray-200" />
              <div className="flex justify-between items-center">
                <span className="w-1/3 text-sm text-gray-600">User Rating</span>
                <span className="w-2/3 text-sm font-medium text-right">
                  {details.userRating || "N/A"}
                </span>
              </div>
              <hr className="border-t border-gray-200" />
              <div className="flex justify-between items-center">
                <span className="w-1/3 text-sm text-gray-600">Reviews</span>
                <span className="w-2/3 text-sm font-medium text-right">
                  {details.numberOfReviews || "N/A"}
                </span>
              </div>
              <hr className="border-t border-gray-200" />
              <div className="flex justify-between items-center">
                <span className="w-1/3 text-sm text-gray-600">
                  Special Features
                </span>
                <span className="w-2/3 text-sm font-medium text-right">
                  {Array.isArray(details.specialFeatures)
                    ? details.specialFeatures.join(", ") || "None"
                    : details.specialFeatures || "None"}
                </span>
              </div>
            </div>
            {/* Sub-table for Review Sentiment */}
            {details.reviewSentiment && (
              <div className="mt-2">
                <h5 className="text-lg font-semibold text-gray-800 mb-1">
                  Review Sentiment
                </h5>
                <div className="border border-gray-200 p-1">
                  {Object.entries(details.reviewSentiment).map(
                    ([key, value]) => (
                      <div key={key} className="flex justify-between text-xs">
                        <span
                          className="font-medium text-gray-600"
                          style={{ width: "50%" }}
                        >
                          {key}
                        </span>
                        <span style={{ width: "50%" }}>
                          {typeof value === "number"
                            ? value.toFixed(2)
                            : parseFloat(value).toFixed(2)}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Sub-table for Feature Importance */}
            {details.featureImportance && (
              <div className="mt-2">
                <h5 className="text-lg font-semibold text-gray-800 mb-1">
                  Feature Importance
                </h5>
                <div className="border border-gray-200 p-1">
                  {Object.entries(featureImportance).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-xs">
                      <span
                        className="font-medium text-gray-600"
                        style={{ width: "50%" }}
                      >
                        {key}
                      </span>
                      <span style={{ width: "50%" }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </motion.div>
));

const CustomerReviewsPanel = React.memo(({ activeSelectedProducts }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.5 }}
    className="mb-12"
  >
    <h3 className="text-2xl font-bold text-gray-800 mb-4">
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
            className="bg-white p-6 rounded-2xl border border-gray-300 hover:shadow-lg transition-shadow space-y-4"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h4 className="text-lg font-semibold text-gray-800">
                💬 {product.model} Reviews
              </h4>
              <div className="flex items-center space-x-4 mt-2 md:mt-0">
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
                  className="bg-gray-50 p-4 rounded-md border border-gray-200 hover:border-indigo-300 transition-all"
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
  </motion.div>
));

const CompetitorResults = () => {
  const dispatch = useDispatch();
  const {
    categoryName,
    brandName,
    selectedCompetitorBrands,
    competitorProducts,
    loading,
  } = useSelector((state) => state.products);

  const myProducts = useMemo(
    () => competitorProducts.filter((p) => p.isMyCompanyProduct),
    [competitorProducts]
  );
  const competitorItems = useMemo(
    () => competitorProducts.filter((p) => !p.isMyCompanyProduct),
    [competitorProducts]
  );

  const {
    activeFilters,
    selectedFeatures,
    toggleActiveFilter,
    toggleFeatureSelection,
    resetFilters,
  } = useFilters(competitorProducts);

  const [mounted, setMounted] = useState(false);
  const [lastSentFilters, setLastSentFilters] = useState(null);

  const query = categoryName || "Products";
  const category = categoryName ? categoryName.toLowerCase() : "electronics";

  // Function to export PDF with multiple tables per product.
  const handleExportPDF = () => {
    const doc = new jsPDF();
    let y = 20;
    doc.setFontSize(18);
    doc.text("Competitor Products Report", 14, y);
    y += 10;
    doc.setFontSize(11);
    doc.setTextColor(100);
    const pageWidth = doc.internal.pageSize.getWidth();
    const equalColWidth = (pageWidth - 28) / 2; // 14 margin on each side.

    competitorProducts.forEach((product, index) => {
      doc.setFont(undefined, "bold");
      doc.text(`Product ${index + 1}: ${product.model}`, 14, y);
      y += 6;

      // Top-Level Table.
      const topLevelHeaders = ["Key", "Value"];
      const topLevelData = [
        ["ID", `${product.id}`],
        ["Is My Company Product", `${product.isMyCompanyProduct}`],
        ["Competitor Name", `${product.competitorName}`],
        ["Model", `${product.model}`],
        ["Thumbnail", `${product.features?.thumbnail || "N/A"}`],
      ];
      autoTable(doc, {
        head: [topLevelHeaders],
        body: topLevelData,
        startY: y,
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 2 },
        columnStyles: {
          0: { cellWidth: equalColWidth },
          1: { cellWidth: equalColWidth },
        },
      });
      y = doc.lastAutoTable.finalY + 4;

      // Details Table.
      doc.setFont(undefined, "bold");
      doc.text("Details", 14, y);
      y += 6;
      const details = product.details || {};
      const detailsSimpleData = [];
      if (details.price)
        detailsSimpleData.push([
          "Price",
          Array.isArray(details.price)
            ? details.price.join(" | ")
            : details.price,
        ]);
      if (details.userRating)
        detailsSimpleData.push(["User Rating", details.userRating]);
      if (details.numberOfReviews)
        detailsSimpleData.push(["Number of Reviews", details.numberOfReviews]);
      if (details.specialFeatures)
        detailsSimpleData.push([
          "Special Features",
          Array.isArray(details.specialFeatures)
            ? details.specialFeatures.join(" | ")
            : details.specialFeatures,
        ]);
      autoTable(doc, {
        head: [["Key", "Value"]],
        body: detailsSimpleData,
        startY: y,
        theme: "striped",
        styles: { fontSize: 10, cellPadding: 2 },
        columnStyles: {
          0: { cellWidth: equalColWidth },
          1: { cellWidth: equalColWidth },
        },
      });
      y = doc.lastAutoTable.finalY + 4;

      // Sub-table for reviewSentiment.
      if (details.reviewSentiment) {
        doc.setFont(undefined, "bold");
        doc.text("Review Sentiment", 14, y);
        y += 6;
        const reviewSentimentData = Object.entries(details.reviewSentiment).map(
          ([key, value]) => [key, value]
        );
        autoTable(doc, {
          head: [["Key", "Value"]],
          body: reviewSentimentData,
          startY: y,
          theme: "grid",
          styles: { fontSize: 10, cellPadding: 2 },
          columnStyles: {
            0: { cellWidth: equalColWidth },
            1: { cellWidth: equalColWidth },
          },
        });
        y = doc.lastAutoTable.finalY + 4;
      }

      // Sub-table for featureImportance.
      if (details.featureImportance) {
        doc.setFont(undefined, "bold");
        doc.text("Feature Importance", 14, y);
        y += 6;
        const featureImportanceData = Object.entries(
          details.featureImportance
        ).map(([key, value]) => [key, value]);
        autoTable(doc, {
          head: [["Key", "Value"]],
          body: featureImportanceData,
          startY: y,
          theme: "grid",
          styles: { fontSize: 10, cellPadding: 2 },
          columnStyles: {
            0: { cellWidth: equalColWidth },
            1: { cellWidth: equalColWidth },
          },
        });
        y = doc.lastAutoTable.finalY + 4;
      }

      // Insights Table.
      doc.setFont(undefined, "bold");
      doc.text("Insights", 14, y);
      y += 6;
      const insights = product.insights || {};
      const insightsData = Object.entries(insights).map(([key, value]) => [
        key,
        value,
      ]);
      autoTable(doc, {
        head: [["Key", "Value"]],
        body: insightsData,
        startY: y,
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 2 },
        columnStyles: {
          0: { cellWidth: equalColWidth },
          1: { cellWidth: equalColWidth },
        },
      });
      y = doc.lastAutoTable.finalY + 4;

      // Features Table.
      doc.setFont(undefined, "bold");
      doc.text("Features", 14, y);
      y += 6;
      const features = product.features || {};
      const featuresData = Object.entries(features).map(([key, value]) => [
        key,
        value,
      ]);
      autoTable(doc, {
        head: [["Key", "Value"]],
        body: featuresData,
        startY: y,
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 2 },
        columnStyles: {
          0: { cellWidth: equalColWidth },
          1: { cellWidth: equalColWidth },
        },
      });
      y = doc.lastAutoTable.finalY + 8;

      // If nearing the page end, add a new page.
      if (y > 250 && index < competitorProducts.length - 1) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save("competitor_products.pdf");
  };

  // Function to export CSV with all product data flattened.
  const handleExportCSV = () => {
    if (!competitorProducts.length) return;
    const flattenedProducts = competitorProducts.map((product) =>
      flattenObject(product)
    );
    const allHeadersSet = new Set();
    flattenedProducts.forEach((flat) => {
      Object.keys(flat).forEach((key) => allHeadersSet.add(key));
    });
    const headers = Array.from(allHeadersSet);
    const csvRows = [];
    csvRows.push(headers.join(","));
    flattenedProducts.forEach((row) => {
      const values = headers.map(
        (header) => `"${row[header] !== undefined ? row[header] : ""}"`
      );
      csvRows.push(values.join(","));
    });
    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "competitor_products.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Fetch competitor products when competitor brands are selected.
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

  const handleResetFilters = () => {
    const allModels = competitorProducts.map((p) => p.model);
    resetFilters(allModels);
  };

  const activeSelectedProducts = useMemo(
    () =>
      competitorProducts.filter((product) => activeFilters.has(product.model)),
    [competitorProducts, activeFilters]
  );

  if (loading && competitorProducts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white relative">
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <div className="z-10 flex flex-col items-center space-y-4">
          <Lottie
            animationData={sparklesAnimation}
            loop
            autoplay
            className="w-32 h-32"
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          />
          <p className="text-2xl font-bold text-gray-800 text-center">
            Analysis ongoing, fetching competitor details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 flex flex-col font-sans relative overflow-hidden">
      {/* Top-right Icons for Export */}
      <div
        className="absolute top-4 right-4 flex gap-3 z-20"
        style={{ paddingTop: 36, paddingRight: 30 }}
      >
        <FaFilePdf
          onClick={handleExportPDF}
          className="cursor-pointer text-blue-600 hover:text-blue-700 text-2xl"
        />
        <FaFileCsv
          onClick={handleExportCSV}
          className="cursor-pointer text-green-600 hover:text-green-700 text-2xl"
        />
      </div>
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-8 relative z-10"
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
        <div className="flex-1 p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-300">
          <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            📊{" "}
            {categoryName
              ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
              : "Products"}{" "}
            Competitive Analysis
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

          {/* Data Report */}
          <div className="mb-12 animate-fadeInUp delay-300">
            {/* <h3 className="text-2xl font-bold mb-6 text-gray-700">
              📊 Analysis Report
            </h3> */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-[450px] md:h-[600px]"
                src="https://lookerstudio.google.com/embed/reporting/100436a2-d3ff-410d-9318-8696fa4a79a1/page/gxYEF"
                frameBorder="0"
                allowFullScreen
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
              ></iframe>
            </div>
          </div>

          <CustomerReviewsPanel
            activeSelectedProducts={activeSelectedProducts}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default CompetitorResults;
