"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const competitors = ["Apple", "Samsung", "Google", "OnePlus", "Sony", "Huawei"];

const CompetitorSelection = () => {
  const [selectedCompetitors, setSelectedCompetitors] = useState([]);
  const router = useRouter();

  const toggleCompetitor = (competitor) => {
    setSelectedCompetitors((prev) =>
      prev.includes(competitor)
        ? prev.filter((c) => c !== competitor)
        : [...prev, competitor]
    );
  };

  const handleProceed = () => {
    if (selectedCompetitors.length === 0) return;
    const query = selectedCompetitors.join(",");
    router.push(`/competitor-results?brands=${query}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-indigo-800 to-gray-900 text-white">
      <div className="w-full max-w-lg p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-300">
          Select Competitor Brands
        </h1>
        <p className="text-center text-gray-400 mb-4">
          Choose the brands you want to compare.
        </p>
        <div className="space-y-3 mb-6">
          {competitors.map((competitor) => (
            <label key={competitor} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedCompetitors.includes(competitor)}
                onChange={() => toggleCompetitor(competitor)}
                className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-500"
              />
              <span className="text-lg text-gray-300">{competitor}</span>
            </label>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleProceed}
            disabled={selectedCompetitors.length === 0}
            className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompetitorSelection;
