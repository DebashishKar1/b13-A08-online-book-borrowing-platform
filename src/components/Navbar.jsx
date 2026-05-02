"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { BookOpen, User, LogOut } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="bg-white border-b shadow-sm px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <Link href="/" className="text-2xl font-bold text-gray-900">BookStore</Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/books" className="hover:text-blue-600">All Books</Link>
          <Link href="/profile" className="hover:text-blue-600">My Profile</Link>
        </div>

        {/* Right: Conditional Rendering */}
        <div>
          {session ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User size={20} />
                <span className="font-medium hidden sm:block">
                  {session.user?.name || "User"}
                </span>
              </div>
              <Button onClick={handleSignOut} variant="outline">
                <LogOut size={18} /> Logout
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
}