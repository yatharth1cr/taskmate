import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import taskSVG from "/task01.svg";

const inputClass = "w-full p-2 border border-[#30363d] bg-[#ededed] rounded";
const labelClass = "block text-sm font-medium text-white mb-1";

const TaskForm = () => {
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

    onSubmit: (values) => {
      console.log("Form data:", values);
    },
  });

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-screen ">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-[#161B22] border border-[#30363d] p-8 rounded-lg shadow space-y-4 w-full max-w-2xl"
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-red-500 text-sm">{formik.errors.title}</div>
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <div className="text-red-500 text-sm">
              {formik.errors.description}
            </div>
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dueDate}
          />
          {formik.touched.dueDate && formik.errors.dueDate && (
            <div className="text-red-500 text-sm">{formik.errors.dueDate}</div>
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.priority}
          >
            <option value="">Select Priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          {formik.touched.priority && formik.errors.priority && (
            <div className="text-red-500 text-sm">{formik.errors.priority}</div>
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.status}
          >
            <option value="">Select Status</option>
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
          {formik.touched.status && formik.errors.status && (
            <div className="text-red-500 text-sm">{formik.errors.status}</div>
          )}
        </div>

        {/* Assigned To */}
        <div>
          <label htmlFor="assignedTo" className={labelClass}>
            Assign To
          </label>
          <input
            id="assignedTo"
            name="assignedTo"
            type="text"
            placeholder="Name or Email"
            className={inputClass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.assignedTo}
          />
          {formik.touched.assignedTo && formik.errors.assignedTo && (
            <div className="text-red-500 text-sm">
              {formik.errors.assignedTo}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-700 text-white py-2 px-4 rounded hover:bg-orange-800 transition"
        >
          Create Task
        </button>
      </form>

      {/* SVG Image */}
      <div className="hidden md:block w-1/2">
        <img src={taskSVG} alt="Task Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default TaskForm;
