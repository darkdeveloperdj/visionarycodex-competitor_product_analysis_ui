"use client";
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 flex items-center justify-center p-4 font-sans">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
      `}</style>

      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Content Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-300 bg-clip-text text-transparent mb-4">
              Contact Our Team
            </h1>
            <p className="text-gray-300 leading-relaxed">
              Connect with our analytics experts to unlock strategic insights
              and competitive intelligence.
            </p>
          </div>

          <form className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-purple-200">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3.5 text-gray-100 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-purple-200">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3.5 text-gray-100 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-purple-200">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="How can we help you?"
                className="w-full p-3.5 text-gray-100 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3.5 text-lg font-semibold text-gray-100 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-purple-500/20 hover:scale-[1.02] transition-all duration-200"
            >
              Send Message
              <span className="ml-2 text-purple-200">→</span>
            </button>
          </form>
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="relative group overflow-hidden rounded-2xl border border-white/10">
            <img
              src="https://via.placeholder.com/400x500"
              alt="Contact"
              className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent p-6 flex flex-col justify-end">
              <blockquote className="text-gray-300 italic">
                "Data-driven decisions start with the right insights. Let's
                build your competitive advantage."
              </blockquote>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <div className="text-purple-200 font-semibold">Contact Details</div>
            <div className="text-gray-400 text-sm space-y-1">
              <p>123 Analytics Street</p>
              <p>Mumbai, India 400001</p>
              <p>contact@competitorpro.com</p>
              <p>+91 12345 67890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
