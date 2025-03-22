"use client";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsRequest,
  setSelectedProducts,
  setAllProducts,
} from "../store/product/productsSlice";
import Lottie from "lottie-react";
import selectionAnimation from "../../../public/assets/animations/selection-animation.json";
import sparklesAnimation from "../../../public/assets/animations/sparkles.json";
import checkmarkAnimation from "../../../public/assets/animations/checkmark.json";
import sparkleAnimation from "../../../public/assets/animations/sparkle.json";
import "../../../public/assets/css/CompetitorSelection.css";

// Simple parsers for features and insights
const parseFeatures = (featuresStr) => {
  try {
    const jsonStr = featuresStr.replace(/'/g, '"');
    return JSON.parse(jsonStr);
  } catch (error) {
    return {};
  }
};

const parseInsights = (insightsStr) => {
  try {
    const jsonStr = insightsStr.replace(/'/g, '"');
    return JSON.parse(jsonStr);
  } catch (error) {
    return {};
  }
};

const ProductSelection = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // Read search parameters from Redux state instead of URL searchParams.
  const {
    productName,
    companyNamesInput,
    allProducts: apiProducts,
    loading,
  } = useSelector((state) => state.products);

  // Use productName (converted to lowercase) as the category.
  const category = productName ? productName.toLowerCase() : "";

  const [mounted, setMounted] = useState(false);
  const [localSelected, setLocalSelected] = useState([]);

  // Flatten products and add unique IDs
  const flattenedProducts = useMemo(
    () =>
      apiProducts.flat().map((product, index) => ({
        ...product,
        uniqueId: `${product.brand}-${product.model}-${index}`,
      })),
    [apiProducts]
  );
  // Parse brands from companyNamesInput from Redux.
  const brands = companyNamesInput
    ? companyNamesInput.split(",").map((brand) => brand.trim())
    : [];

  useEffect(() => {
    setMounted(true);
    // Dispatch fetchProductsRequest using category and companyNamesInput from Redux.
    dispatch(fetchProductsRequest({ category, companyNamesInput }));
  }, [dispatch, category, companyNamesInput]);

  useEffect(() => {
    // Compare lengths as a simple check (you can enhance this logic if needed)
    if (flattenedProducts.length !== apiProducts.length) {
      dispatch(setAllProducts(flattenedProducts));
    }
  }, [flattenedProducts, apiProducts.length, dispatch]);

  const groupedByBrand = flattenedProducts.reduce((acc, product) => {
    const brand = product.brand;
    acc[brand] = acc[brand] || [];
    acc[brand].push(product);
    return acc;
  }, {});

  const toggleProduct = (product) => {
    setLocalSelected((prev) =>
      prev.includes(product.uniqueId)
        ? prev.filter((c) => c !== product.uniqueId)
        : [...prev, product.uniqueId]
    );
  };

  const handleProceed = () => {
    if (localSelected.length === 0) return;

    // Get selected product objects based on localSelected IDs.
    const selectedProductsData = flattenedProducts.filter((product) =>
      localSelected.includes(product.uniqueId)
    );

    // Update Redux store with the selected products.
    dispatch(setSelectedProducts(selectedProductsData));
    dispatch(setAllProducts(flattenedProducts));

    // Navigate to competitor results using stored values from Redux.
    router.push(`/competitor-results`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="animate-pulse text-2xl text-purple-600">
          Loading products...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center p-4 font-sans relative overflow-hidden">
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <Lottie
          animationData={sparklesAnimation}
          loop
          autoplay
          className="w-full h-full"
        />
      </div>

      <div
        className={`w-full max-w-2xl p-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200 transform transition-all duration-1000 relative z-10 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative h-48 mb-4 -mt-12">
          <Lottie
            animationData={selectionAnimation}
            loop
            autoplay
            className="w-40 h-40 mx-auto"
          />
          <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl font-extrabold text-center w-full bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {category ? `${category} Products` : "Product Selection"}
          </h1>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg text-gray-700">
            Analyzing brands:{" "}
            <span className="font-semibold text-purple-600 animate-pulse">
              {brands.join(", ")}
            </span>
            {category && (
              <>
                {" "}
                in{" "}
                <span className="font-semibold text-indigo-600">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </>
            )}
          </p>
        </div>

        {Object.keys(groupedByBrand).length > 0 ? (
          <div className="space-y-8 mb-8">
            {Object.entries(groupedByBrand).map(([brand, products]) => (
              <div key={brand} className="animate-fadeInUp">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 px-4 py-2 bg-indigo-50 rounded-lg">
                  {brand}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {products.map((product) => {
                    const features = parseFeatures(product.features);
                    const insights = parseInsights(product.insights);

                    return (
                      <label
                        key={product.uniqueId}
                        className={`flex items-center p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:scale-[1.02] group ${
                          localSelected.includes(product.uniqueId)
                            ? "border-purple-500 bg-purple-100 shadow-md"
                            : "border-gray-200 hover:border-purple-300 bg-white"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={localSelected.includes(product.uniqueId)}
                          onChange={() => toggleProduct(product)}
                          className="hidden"
                        />
                        <div className="flex items-center w-full">
                          <div
                            className={`w-6 h-6 flex items-center justify-center mr-4 border-2 rounded-md transition-all ${
                              localSelected.includes(product.uniqueId)
                                ? "bg-purple-500 border-purple-500 scale-110"
                                : "border-gray-400 hover:border-purple-300"
                            }`}
                          >
                            {localSelected.includes(product.uniqueId) && (
                              <Lottie
                                animationData={checkmarkAnimation}
                                loop={false}
                                autoplay
                                className="w-4 h-4"
                              />
                            )}
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {product.model}
                            </h3>
                            <div className="text-sm text-gray-600 mt-1">
                              <span className="font-medium">Features:</span>{" "}
                              {Object.keys(features).join(", ").slice(0, 50) ||
                                "N/A"}
                            </div>
                            <div className="text-sm text-gray-600">
                              <span className="font-medium">Market Share:</span>{" "}
                              {insights.marketShare || "N/A"}
                            </div>
                            <div className="text-sm text-gray-600">
                              <span className="font-medium">Price Trend:</span>{" "}
                              {insights.priceTrend || "N/A"}
                            </div>
                          </div>
                          <Lottie
                            animationData={sparkleAnimation}
                            loop
                            autoplay
                            className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="animate-fadeInUp text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-gray-700">
              No products found for {brands.join(", ")} in {category} category
            </p>
          </div>
        )}

        <div className="mt-8 animate-fadeInUp">
          <button
            onClick={handleProceed}
            disabled={localSelected.length === 0}
            className={`w-full px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-300 ${
              localSelected.length > 0
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-md hover:scale-[1.02]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Compare Selected Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSelection;
