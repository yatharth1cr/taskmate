import React from "react";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Tasks = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Stats Cards */}
        <section className="flex flex-col sm:flex-row justify-center gap-6">
          <StatsCard title="Assigned to Me" count={5} />
          <StatsCard title="Created by Me" count={12} />
          <StatsCard title="Overdue Tasks" count={2} />
        </section>

        {/* Task Creation Form */}
        <section>
          <TaskForm />
        </section>

        {/* Task List Table */}
        <section>
          <TaskList />
        </section>
      </main>
    </div>
  );
};

export default Tasks;
