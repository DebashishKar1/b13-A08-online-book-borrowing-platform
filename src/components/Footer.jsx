// src/components/Footer.jsx
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand - Same as Navbar */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-9 h-9 text-blue-600" />
              <h2 className="text-3xl font-bold text-white">BookStore</h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your modern digital library.<br />
              Discover • Borrow • Enjoy
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/books" className="hover:text-white transition">All Books</Link></li>
              <li><Link href="/profile" className="hover:text-white transition">My Profile</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Community</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-white transition">Book Reviews</Link></li>
              <li><Link href="#" className="hover:text-white transition">Discussion Forum</Link></li>
              <li><Link href="#" className="hover:text-white transition">Reading Challenges</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Get In Touch</h3>
            
            <div className="space-y-4 mb-8 text-sm">
              <div>support@bookstore.com</div>
              <div>+880 1711-234567</div>
              <div>Dhaka, Bangladesh</div>
            </div>

            <div>
              <h4 className="text-white mb-4">Follow Us</h4>
              <div className="flex gap-6 text-3xl">
                <a href="#" className="hover:text-white transition hover:scale-110">𝕏</a>
                <a href="#" className="hover:text-white transition hover:scale-110">📸</a>
                <a href="#" className="hover:text-white transition hover:scale-110">📘</a>
                <a href="#" className="hover:text-white transition hover:scale-110">▶️</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
          <p>© 2026 BookStore. All Rights Reserved.</p>
          <p className="mt-1">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}