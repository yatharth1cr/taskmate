import React, { useState } from "react";
import { FaTasks, FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#161B22] border-b border-[#30363d] text-orange-500 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-3">
        <FaTasks className="text-3xl" />
        <h1 className="text-2xl font-bold tracking-wide">TaskMate</h1>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-md font-medium">
        <a href="/tasks" className="hover:text-orange-300">
          Tasks
        </a>
        <a href="/login" className="hover:text-orange-300">
          Login
        </a>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <FaBars
          className="text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-[#161B22] border border-[#30363d] rounded-lg p-4 space-y-3 md:hidden">
          <a href="/tasks" className="block text-sm hover:text-orange-300">
            Tasks
          </a>
          <a href="/login" className="block text-sm hover:text-orange-300">
            Login
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
