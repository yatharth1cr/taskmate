import React, { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Add new task to the top of the list
  // const handleNewTask = (newTask) => {
  //   setTasks((prev) => [newTask, ...prev]);
  // };

  // Fetch tasks from server
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const params = new URLSearchParams({
          ...(search && { search }),
          ...(status && { status }),
          ...(priority && { priority }),
          ...(sortBy && { sortBy }),
          ...(sortOrder && { sortOrder }),
          page,
          limit: 5,
        });

        const res = await fetch(`/api/tasks?${params.toString()}`);
        const data = await res.json();
        setTasks(data.tasks);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }
    };

    fetchTasks();
  }, [search, status, priority, sortBy, sortOrder, page]);

  const handleEdit = (task) => {
    console.log("Edit task:", task);
    // implement modal or redirect to edit page
  };

  const handleDelete = async (taskId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      await fetch(`/api/tasks/${taskId}`, { method: "DELETE" });
      setTasks((prev) => prev.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Failed to delete task", error);
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto text-white bg-[#161B22] rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">All Tasks</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full sm:w-64"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Sort By</option>
          <option value="title">Title</option>
          <option value="priority">Priority</option>
          <option value="status">Status</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>

      {/* Task Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-100 text-black">
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Priority</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <tr
                  key={task._id}
                  className="text-center hover:bg-gray-50 text-white"
                >
                  <td className="px-4 py-2 border">{task.title}</td>
                  <td className="px-4 py-2 border">{task.description}</td>
                  <td className="px-4 py-2 border">{task.priority}</td>
                  <td className="px-4 py-2 border">{task.status}</td>
                  <td className="px-4 py-2 border space-x-2">
                    <button
                      onClick={() => handleEdit(task)}
                      className="text-blue-400 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="text-red-400 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-400">
                  No tasks found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TaskList;
