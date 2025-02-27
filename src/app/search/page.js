"use client";
import { useState } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const competitors = ["Apple", "Samsung", "Google", "OnePlus"];
const features = ["5G", "Wireless Charging", "OLED Display", "Face ID"];
const brands = ["Apple", "Samsung", "Google", "Sony"];

const productData = [
  { brand: "Apple", model: "iPhone 14", features: ["5G", "OLED Display"] },
  {
    brand: "Samsung",
    model: "Galaxy S22",
    features: ["5G", "Wireless Charging"],
  },
  { brand: "Google", model: "Pixel 7", features: ["5G", "Face ID"] },
  {
    brand: "OnePlus",
    model: "OnePlus 10",
    features: ["5G", "Wireless Charging"],
  },
];

const trendData = {
  labels: competitors,
  datasets: [
    {
      label: "Market Growth (%)",
      data: [25, 30, 22, 18],
      backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#F3FF33"],
    },
  ],
};

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [selectedCompetitor, setSelectedCompetitor] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const toggleFeature = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-indigo-800 to-gray-900 text-white p-8 flex flex-col">
      <div className="flex">
        {/* Sidebar Filters */}
        <div className="w-1/4 p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-center">Filters</h2>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Select Competitor</h3>
            {competitors.map((comp) => (
              <button
                key={comp}
                className={`block w-full text-left p-2 rounded-md ${
                  selectedCompetitor === comp
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-300 text-black"
                }`}
                onClick={() => setSelectedCompetitor(comp)}
              >
                {comp}
              </button>
            ))}
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Select Features</h3>
            {features.map((feature) => (
              <label key={feature} className="block text-black">
                <input
                  type="checkbox"
                  checked={selectedFeatures.includes(feature)}
                  onChange={() => toggleFeature(feature)}
                  className="mr-2"
                />
                {feature}
              </label>
            ))}
          </div>
          <div>
            <h3 className="font-semibold mb-2">Select Brand</h3>
            {brands.map((brand) => (
              <button
                key={brand}
                className={`block w-full text-left p-2 rounded-md ${
                  selectedBrand === brand
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-300 text-black"
                }`}
                onClick={() => setSelectedBrand(brand)}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Competitive Analysis Section */}
        <div className="w-3/4 p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-xl ml-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-300">
            Competitive Product Analysis
          </h2>
          <p className="text-center text-gray-400 mb-4">
            Analyze competitor products and trends to make informed business
            decisions.
          </p>
          <div className="mt-6 text-center text-gray-300">
            {query && <p>Searching for: {query}</p>}
            {selectedCompetitor && <p>Competitor: {selectedCompetitor}</p>}
            {selectedFeatures.length > 0 && (
              <p>Features: {selectedFeatures.join(", ")}</p>
            )}
            {selectedBrand && <p>Brand: {selectedBrand}</p>}
          </div>

          {/* Comparison Table */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">
              Product Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-500 text-gray-300">
                <thead>
                  <tr className="bg-indigo-800 text-white">
                    <th className="border border-gray-500 p-3">Brand</th>
                    <th className="border border-gray-500 p-3">Model</th>
                    <th className="border border-gray-500 p-3">Features</th>
                  </tr>
                </thead>
                <tbody>
                  {productData.map((product, index) => (
                    <tr key={index} className="text-center bg-gray-700">
                      <td className="border border-gray-500 p-3">
                        {product.brand}
                      </td>
                      <td className="border border-gray-500 p-3">
                        {product.model}
                      </td>
                      <td className="border border-gray-500 p-3">
                        {product.features.join(", ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Trend Analysis */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">
              Trend Analysis
            </h3>
            <p className="text-gray-400 mb-4">
              Market growth analysis of major competitors over the last year.
            </p>
            <Bar data={trendData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
