import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-6 text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-indigo-800 to-gray-900 bg-clip-text text-transparent">
          About <span className="text-white">Our Platform</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Your ultimate destination for in-depth competitive product analysis.
          Compare features, trends, and insights across multiple brands to make
          informed decisions.
        </p>
      </div>

      {/* About the Developer Section */}
      <div className="bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-600 text-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          What We Offer
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Developer Image */}
          <img
            src="https://via.placeholder.com/150"
            alt="Developer"
            className="w-40 h-40 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8 border-4 border-white"
          />
          {/* Developer Details */}
          <div>
            <p className="text-lg leading-relaxed">
              Our platform provides a detailed competitive analysis of products
              from top brands. Whether you're researching smartphones, laptops,
              or other tech gadgets, we help you compare key features, pricing,
              and trends. Our intuitive search and filtering system ensures you
              get the most relevant insights.
            </p>
            <p className="text-sm mt-4 italic">
              "Bringing clarity to product choices through innovation and
              technology."
            </p>
            <p className="mt-2 text-sm">Location: India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
