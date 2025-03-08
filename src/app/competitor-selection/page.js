"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { categoryCompetitors } from "../demo_data";

const CompetitorSelection = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "Products";
  const category = searchParams.get("category") || "general";
  const router = useRouter();

  const [selectedCompetitors, setSelectedCompetitors] = useState([]);
  const competitors = categoryCompetitors[category.toLowerCase()] || [];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4 font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
        body {
          font-family: "Inter", sans-serif;
        }
      `}</style>

      <div className="w-full max-w-2xl p-8 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-300 bg-clip-text text-transparent">
          Competitor Selection
        </h1>

        <div className="text-center mb-8">
          <p className="text-lg text-purple-200">
            Analyzing:{" "}
            <span className="font-semibold text-purple-300">{query}</span> in{" "}
            <span className="font-semibold text-indigo-300">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </p>
        </div>

        {competitors.length > 0 ? (
          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-purple-200 mb-4 text-center">
              Select Competitors ({selectedCompetitors.length} chosen)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competitors.map((competitor) => (
                <label
                  key={competitor}
                  className={`flex items-center p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    selectedCompetitors.includes(competitor)
                      ? "border-purple-500 bg-purple-900/30 shadow-purple-500/20"
                      : "border-white/10 hover:border-purple-400/30 bg-white/5"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedCompetitors.includes(competitor)}
                    onChange={() => toggleCompetitor(competitor)}
                    className="hidden"
                  />
                  <div className="flex items-center">
                    <div
                      className={`w-6 h-6 flex items-center justify-center mr-4 border-2 rounded-md transition-colors
                      ${
                        selectedCompetitors.includes(competitor)
                          ? "bg-purple-500 border-purple-500"
                          : "border-gray-400"
                      }`}
                    >
                      {selectedCompetitors.includes(competitor) && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-gray-100 text-lg">{competitor}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center p-6 bg-purple-900/20 rounded-lg border border-purple-400/20">
            <p className="text-purple-200">
              No competitors found for this category
            </p>
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={handleProceed}
            disabled={selectedCompetitors.length === 0}
            className={`w-full px-8 py-4 text-lg font-semibold text-gray-100 rounded-xl shadow-2xl transition-all duration-200
              ${
                selectedCompetitors.length > 0
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-purple-500/20 hover:scale-[1.02]"
                  : "bg-gray-700/50 cursor-not-allowed"
              }`}
          >
            Generate Comparative Analysis
            <span className="ml-3 text-purple-200">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompetitorSelection;
