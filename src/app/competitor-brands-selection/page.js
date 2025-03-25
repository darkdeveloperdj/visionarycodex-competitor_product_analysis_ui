"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCompetitorBrandsRequest,
  setSelectedCompetitorBrands, // reusing this action to store selected competitors
} from "../store/product/productsSlice";
import Lottie from "lottie-react";
import selectionAnimation from "../../../public/assets/animations/selection-animation.json";
import sparklesAnimation from "../../../public/assets/animations/sparkles.json";
import checkmarkAnimation from "../../../public/assets/animations/checkmark.json";
import sparkleAnimation from "../../../public/assets/animations/sparkle.json";
import "../../../public/assets/css/CompetitorSelection.css";

const CompetitorSelection = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categoryName, brandName, competitorBrands, loading } = useSelector(
    (state) => state.products
  );

  const [mounted, setMounted] = useState(false);
  const [localSelected, setLocalSelected] = useState([]);
  const hasFetched = useRef(false);
  const category = categoryName?.toLowerCase() || "";

  useEffect(() => {
    setMounted(true);
    if (!hasFetched.current) {
      // Dispatch competitor brands request with category and brand name
      dispatch(
        fetchCompetitorBrandsRequest({
          category_name: category,
          brand_name: brandName,
        })
      );
      hasFetched.current = true;
    }
  }, [dispatch, category, brandName]);

  const toggleCompetitor = (competitor) => {
    setLocalSelected((prev) =>
      prev.includes(competitor.id)
        ? prev.filter((id) => id !== competitor.id)
        : [...prev, competitor.id]
    );
  };

  const handleProceed = () => {
    if (!localSelected.length) return;
    const selectedCompetitors = competitorBrands.filter((c) =>
      localSelected.includes(c.id)
    );
    // Extract only the competitor names to send
    const selectedCompetitorNames = selectedCompetitors.map(
      (competitor) => competitor.competitorName
    );
    dispatch(setSelectedCompetitorBrands(selectedCompetitorNames));
    router.push(`/competitor-results`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="animate-pulse text-2xl text-purple-600">
          Loading competitors...
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
            {category
              ? `${
                  category.charAt(0).toUpperCase() + category.slice(1)
                } Competitors`
              : "Competitor Selection"}
          </h1>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg text-gray-700">
            Comparing competitors for your brand:{" "}
            <span className="font-semibold text-purple-600 animate-pulse">
              {brandName}
            </span>{" "}
            {category && (
              <>
                in{" "}
                <span className="font-semibold text-indigo-600">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </>
            )}
          </p>
        </div>

        {competitorBrands && competitorBrands.length > 0 ? (
          // Updated grid container for 2 competitors per row
          <div className="grid grid-cols-2 gap-4 mb-8">
            {competitorBrands.map((competitor) => (
              <label
                key={competitor.id}
                className={`flex flex-col p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:scale-[1.02] group ${
                  localSelected.includes(competitor.id)
                    ? "border-purple-500 bg-purple-100 shadow-md"
                    : "border-gray-200 hover:border-purple-300 bg-white"
                }`}
              >
                <div className="flex items-center mb-2">
                  <div
                    className={`w-6 h-6 flex items-center justify-center mr-4 border-2 rounded-md transition-all ${
                      localSelected.includes(competitor.id)
                        ? "bg-purple-500 border-purple-500 scale-110"
                        : "border-gray-400 hover:border-purple-300"
                    }`}
                  >
                    {localSelected.includes(competitor.id) && (
                      <Lottie
                        animationData={checkmarkAnimation}
                        loop={false}
                        autoplay
                        className="w-4 h-4"
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {competitor.competitorName}
                  </h3>
                </div>
                <div className="text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Founded:</span>{" "}
                    {competitor.founded || "N/A"}
                  </div>
                  <div>
                    <span className="font-medium">Headquarters:</span>{" "}
                    {competitor.headquarters || "N/A"}
                  </div>
                  <div>
                    <span className="font-medium">Industry:</span>{" "}
                    {competitor.industry || "N/A"}
                  </div>
                  <div>
                    <span className="font-medium">Revenue:</span>{" "}
                    {competitor.revenue || "N/A"}
                  </div>
                </div>
                <div className="mt-2">
                  <Lottie
                    animationData={sparkleAnimation}
                    loop
                    autoplay
                    className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <input
                  type="checkbox"
                  checked={localSelected.includes(competitor.id)}
                  onChange={() => toggleCompetitor(competitor)}
                  className="hidden"
                />
              </label>
            ))}
          </div>
        ) : (
          <div className="animate-fadeInUp text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-gray-700">
              No competitors found for your brand in the {category} category.
            </p>
          </div>
        )}

        <div className="mt-8 animate-fadeInUp">
          <button
            onClick={handleProceed}
            disabled={!localSelected.length}
            className={`w-full px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-300 ${
              localSelected.length
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-md hover:scale-[1.02]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Compare Selected Competitors
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompetitorSelection;
