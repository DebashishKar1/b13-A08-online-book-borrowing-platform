// src/components/Banner.jsx
"use client";

import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-gradient-to-br from-indigo-700 via-blue-700 to-purple-700 text-white py-28 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:40px_40px]"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Find Your Next<br />
          <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
            Read
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Discover thousands of books, borrow digitally, and join a community of passionate readers.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link href="/books">
            <button className="bg-white text-indigo-700 font-semibold px-10 py-4 rounded-2xl text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
              Browse Now
            </button>
          </Link>

          <Link href="/about">
            <button className="border border-white/70 hover:bg-white/10 font-medium px-8 py-4 rounded-2xl text-lg transition-all duration-300">
              Learn More
            </button>
          </Link>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm opacity-75">
          <p>✅ 10,000+ Books</p>
          <p>✅ Digital Borrowing</p>
          <p>✅ Secure & Fast</p>
        </div>
      </div>
    </section>
  );
}