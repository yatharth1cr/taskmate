import React from "react";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#161B22]">
      <Header />
      <main className="p-6 max-w-7xl mx-auto space-y-8">
        {/* Stats Section */}
        <section className="flex flex-col sm:flex-row gap-4">
          <StatsCard title="Assigned to Me" count={5} />
          <StatsCard title="Created by Me" count={3} />
          <StatsCard title="Overdue Tasks" count={2} />
        </section>

        {/* Task Form */}
        <section>
          <TaskForm />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
