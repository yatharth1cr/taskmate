import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-6">
          Welcome to TaskMate
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          Stay organized, track your tasks, and get more done every day.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/tasks"
            className="bg-orange-500 text-black px-6 py-3 rounded-xl hover:bg-orange-400 transition"
          >
            View Tasks
          </a>
          <a
            href="/login"
            className="border border-orange-500 px-6 py-3 rounded-xl hover:bg-orange-500 hover:text-black transition"
          >
            Login
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
