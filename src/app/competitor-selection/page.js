"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { categoryCompetitors } from "../demo_data";
import Lottie from "lottie-react";
import selectionAnimation from "../../../public/assets/animations/selection-animation.json";
import sparklesAnimation from "../../../public/assets/animations/sparkles.json";
import checkmarkAnimation from "../../../public/assets/animations/checkmark.json";
import sparkleAnimation from "../../../public/assets/animations/sparkle.json";
import "../../../public/assets/css/CompetitorSelection.css";

const CompetitorSelection = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "Products";
  const category = searchParams.get("category") || "general";
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [selectedCompetitors, setSelectedCompetitors] = useState([]);
  const competitors = categoryCompetitors[category.toLowerCase()] || [];

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleCompetitor = (competitor) => {
    setSelectedCompetitors((prev) =>
      prev.includes(competitor)
        ? prev.filter((c) => c !== competitor)
        : [...prev, competitor]
    );
  };

  const handleProceed = () => {
    if (selectedCompetitors.length === 0) return;
    const selectedBrands = selectedCompetitors.join(",");
    router.push(
      `/competitor-results?query=${query}&category=${category}&brands=${selectedBrands}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background Animation */}
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
      </div>

      <div
        className={`w-full max-w-2xl p-8 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10
        transform transition-all duration-1000 relative z-10 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header Animation */}
        <div className="relative h-48 mb-4 -mt-12">
          <Lottie
            animationData={selectionAnimation}
            loop={true}
            autoplay={true}
            className="w-40 h-40 mx-auto"
          />
          <h1 className="absolute bottom-0 left-1/2 -translate-x-1/2 text-4xl font-extrabold text-center w-full bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-300 bg-clip-text text-transparent">
            Competitor Selection
          </h1>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg text-purple-200">
            Analyzing:{" "}
            <span className="font-semibold text-purple-300 animate-pulse">
              {query}
            </span>{" "}
            in{" "}
            <span className="font-semibold text-indigo-300">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </p>
        </div>

        {competitors.length > 0 ? (
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-purple-200 mb-4 text-center animate-fadeInUp">
              Select Competitors ({selectedCompetitors.length} chosen)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competitors.map((competitor, index) => (
                <label
                  key={competitor}
                  className={`flex items-center p-4 rounded-xl border transition-all duration-200 cursor-pointer 
                    animate-fadeInUp hover:scale-[1.02] group ${
                      selectedCompetitors.includes(competitor)
                        ? "border-purple-500 bg-purple-900/30 shadow-purple-500/20"
                        : "border-white/10 hover:border-purple-400/30 bg-white/5"
                    }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <input
                    type="checkbox"
                    checked={selectedCompetitors.includes(competitor)}
                    onChange={() => toggleCompetitor(competitor)}
                    className="hidden"
                  />
                  <div className="flex items-center w-full">
                    <div
                      className={`w-6 h-6 flex items-center justify-center mr-4 border-2 rounded-md transition-all
                        ${
                          selectedCompetitors.includes(competitor)
                            ? "bg-purple-500 border-purple-500 scale-110"
                            : "border-gray-400 hover:border-purple-300"
                        }`}
                    >
                      {selectedCompetitors.includes(competitor) && (
                        <Lottie
                          animationData={checkmarkAnimation}
                          loop={false}
                          autoplay={true}
                          className="w-4 h-4"
                        />
                      )}
                    </div>
                    <span className="text-gray-100 text-lg flex-1">
                      {competitor}
                    </span>
                    <Lottie
                      animationData={sparkleAnimation}
                      loop={true}
                      autoplay={true}
                      className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-fadeInUp text-center p-6 bg-purple-900/20 rounded-lg border border-purple-400/20">
            <p className="text-purple-200">
              No competitors found for this category
            </p>
          </div>
        )}

        <div className="mt-8 animate-fadeInUp">
          <button
            onClick={handleProceed}
            disabled={selectedCompetitors.length === 0}
            className={`w-full px-8 py-4 text-lg font-semibold text-gray-100 rounded-xl shadow-2xl transition-all duration-300 
              ${
                selectedCompetitors.length > 0
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-purple-500/20 hover:scale-[1.02] hover:bg-gradient-to-br transform-gpu"
                  : "bg-gray-700/50 cursor-not-allowed"
              } relative overflow-hidden group`}
          >
            <span className="relative z-10 flex items-center justify-center">
              Generate Comparative Analysis
              <Lottie
                animationData={sparklesAnimation}
                loop={true}
                autoplay={true}
                className="w-8 h-8 ml-3 opacity-70"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompetitorSelection;
