"use client";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 p-8 font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-300 bg-clip-text text-transparent">
            About Our Platform
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Advanced competitive intelligence platform providing market
            insights, product comparisons, and strategic analytics for modern
            businesses.
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-purple-200 mb-6 text-center">
              Platform Capabilities
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image Container */}
              <div className="shrink-0 relative group">
                <div className="w-48 h-48 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Platform Overview"
                    className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/30 rounded-2xl transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Our analytics engine processes millions of data points to
                  deliver comprehensive product comparisons across top brands.
                  Leverage AI-powered insights to understand market trends,
                  feature parity, and competitive positioning.
                </p>

                <div className="border-l-4 border-purple-500 pl-4 my-6">
                  <p className="text-gray-400 italic">
                    "Empowering data-driven decisions through intuitive
                    analytics and visual storytelling."
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-400">
                    Based in India • Serving global markets
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  title: "Market Insights",
                  content: "Real-time trend analysis and demand forecasting",
                },
                {
                  title: "Feature Analysis",
                  content: "Detailed technical specifications comparison",
                },
                {
                  title: "Strategic Reports",
                  content: "Customizable competitive positioning documents",
                },
                {
                  title: "API Access",
                  content: "Integrate insights directly into your workflows",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
