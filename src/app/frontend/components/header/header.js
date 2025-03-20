"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 border-b border-gray-200 backdrop-blur-xl">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
      `}</style>

      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center group transition-all duration-200"
          >
            <div className="relative w-12 h-12 rounded-xl border-2 border-gray-200 bg-white backdrop-blur-sm overflow-hidden group-hover:border-purple-300 transition-all">
              <Image
                src="/assets/images/logo-min.png"
                alt="Competitor Pro"
                width={48}
                height={48}
                className="object-contain p-1.5"
              />
            </div>
            <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Competitor Pro
            </span>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-2">
            {[
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-700 transition-all duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
            <div className="ml-4 h-6 w-px bg-gray-200"></div>
            <Link
              href="/"
              className="px-4 py-2.5 rounded-lg text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg transition-all duration-200"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
