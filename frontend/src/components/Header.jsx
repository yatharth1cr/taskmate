import React from "react";
import { FaTasks } from "react-icons/fa";

const Header = () => {
  return (
    <header className="border border-[#30363d] text-orange-600 px-6 py-4 drop-shadow flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <FaTasks className="text-3xl" />
        <h1 className="text-2xl font-semibold tracking-wide">TaskMate</h1>
      </div>

      <nav className="hidden md:flex gap-8 text-m font-medium">
        <a href="/" className="hover:text-orange-300 transition">
          Dashboard
        </a>
        <a href="/tasks" className="hover:text-orange-300 transition">
          Tasks
        </a>
        <a href="/login" className="hover:text-orange-300 transition">
          login
        </a>
      </nav>
    </header>
  );
};

export default Header;
