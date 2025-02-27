import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-indigo-800 to-gray-900 text-white flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-10 backdrop-blur-md text-gray-300 rounded-lg shadow-lg p-8 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-300">
            Let's Get in Touch
          </h1>
          <p className="text-center text-gray-400 mb-4">
            We would love to hear from you! Whether you have a question, a
            suggestion, or just want to say hi, feel free to reach out to us.
            Fill in the form below and we’ll respond as quickly as we can.
          </p>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full p-4 text-lg border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-4 text-lg border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message here"
                className="w-full p-4 text-lg border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white text-black"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-full font-semibold text-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Contact Us Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
