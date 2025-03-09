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
              {/* Animated SVG Container */}
              <div className="shrink-0 relative group">
                <div className="w-48 h-48 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex items-center justify-center p-4">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Animated Bar Chart */}
                    <rect x="15" y="60" width="10" height="30" fill="#8B5CF6">
                      <animate
                        attributeName="height"
                        from="0"
                        to="30"
                        dur="0.8s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="y"
                        from="90"
                        to="60"
                        dur="0.8s"
                        fill="freeze"
                      />
                    </rect>

                    <rect x="35" y="40" width="10" height="50" fill="#3B82F6">
                      <animate
                        attributeName="height"
                        from="0"
                        to="50"
                        dur="0.8s"
                        begin="0.2s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="y"
                        from="90"
                        to="40"
                        dur="0.8s"
                        begin="0.2s"
                        fill="freeze"
                      />
                    </rect>

                    <rect x="55" y="30" width="10" height="60" fill="#EC4899">
                      <animate
                        attributeName="height"
                        from="0"
                        to="60"
                        dur="0.8s"
                        begin="0.4s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="y"
                        from="90"
                        to="30"
                        dur="0.8s"
                        begin="0.4s"
                        fill="freeze"
                      />
                    </rect>

                    {/* Animated Line Graph */}
                    <path
                      d="M20 80 Q40 60 60 70 T100 50"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeDasharray="0 1000"
                      fill="none"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        from="0 1000"
                        to="1000 0"
                        dur="1.5s"
                        begin="0.6s"
                        fill="freeze"
                      />
                    </path>

                    {/* Data Points */}
                    <circle cx="20" cy="80" r="2" fill="#A78BFA" />
                    <circle cx="60" cy="70" r="2" fill="#A78BFA" />
                    <circle cx="100" cy="50" r="2" fill="#A78BFA" />

                    <defs>
                      <linearGradient
                        id="lineGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
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
