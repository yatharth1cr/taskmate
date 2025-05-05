import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import taskSVG from "/task01.svg";

// Reusable styles
const inputClass =
  "w-full p-2 border border-[#30363d] bg-[#ebecf0] rounded focus:outline-none focus:ring-2 focus:ring-orange-600 text-black";
const labelClass = "block text-sm font-medium text-white mb-1";
const errorClass = "text-red-500 text-xs mt-1";

const priorityOptions = ["Low", "Medium", "High"];
const statusOptions = ["Pending", "In Progress", "Completed"];

const TaskForm = ({ onTaskCreated }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      status: "",
      assignedTo: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      dueDate: Yup.date().required("Due date is required"),
      priority: Yup.string().required("Select priority"),
      status: Yup.string().required("Select status"),
      assignedTo: Yup.string().required("Assignee is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch("/api/tasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (res.ok) {
          onTaskCreated(data.task); // Add task to TaskList
          resetForm();
        } else {
          alert(data.message || "Failed to create task.");
        }
      } catch (err) {
        console.error(err);
        alert("Something went wrong.");
      }
    },
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-10 gap-8 bg-[#0d1117]">
      {/* Illustration */}
      <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
        <img
          src={taskSVG}
          alt="Task Illustration"
          className="max-w-[400px] w-full h-auto"
        />
      </div>

      {/* Form */}
      <form
        onSubmit={formik.handleSubmit}
        className="bg-[#161B22] border border-[#30363d] p-6 rounded-lg w-full md:w-1/2 space-y-4 shadow-md"
      >
        {/* Title */}
        <div>
          <label htmlFor="title" className={labelClass}>
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter task title"
            className={inputClass}
            {...formik.getFieldProps("title")}
          />
          {formik.touched.title && formik.errors.title && (
            <div className={errorClass}>{formik.errors.title}</div>
          )}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className={labelClass}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Add more details about the task"
            className={inputClass}
            {...formik.getFieldProps("description")}
          />
          {formik.touched.description && formik.errors.description && (
            <div className={errorClass}>{formik.errors.description}</div>
          )}
        </div>

        {/* Due Date */}
        <div>
          <label htmlFor="dueDate" className={labelClass}>
            Due Date
          </label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            className={inputClass}
            {...formik.getFieldProps("dueDate")}
          />
          {formik.touched.dueDate && formik.errors.dueDate && (
            <div className={errorClass}>{formik.errors.dueDate}</div>
          )}
        </div>

        {/* Priority */}
        <div>
          <label htmlFor="priority" className={labelClass}>
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            className={inputClass}
            {...formik.getFieldProps("priority")}
          >
            <option value="">Select priority</option>
            {priorityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {formik.touched.priority && formik.errors.priority && (
            <div className={errorClass}>{formik.errors.priority}</div>
          )}
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className={labelClass}>
            Status
          </label>
          <select
            id="status"
            name="status"
            className={inputClass}
            {...formik.getFieldProps("status")}
          >
            <option value="">Select status</option>
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {formik.touched.status && formik.errors.status && (
            <div className={errorClass}>{formik.errors.status}</div>
          )}
        </div>

        {/* Assigned To */}
        <div>
          <label htmlFor="assignedTo" className={labelClass}>
            Assigned To
          </label>
          <input
            id="assignedTo"
            name="assignedTo"
            type="text"
            placeholder="Enter assignee"
            className={inputClass}
            {...formik.getFieldProps("assignedTo")}
          />
          {formik.touched.assignedTo && formik.errors.assignedTo && (
            <div className={errorClass}>{formik.errors.assignedTo}</div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition cursor-pointer"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
