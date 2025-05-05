import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Signup data:", values);
      // Add signup API logic here
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1117] p-6">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-[#161B22] shadow-lg rounded-xl p-8 w-full max-w-md space-y-6 text-white"
      >
        <h2 className="text-2xl font-bold text-center text-orange-500">
          Create a TaskMate Account
        </h2>

        <div>
          <label htmlFor="name" className="block text-sm text-gray-400">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full mt-1 p-2 bg-[#0D1117] border border-[#30363d] rounded text-white focus:outline-orange-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-sm text-red-500 mt-1">{formik.errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-gray-400">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full mt-1 p-2 bg-[#0D1117] border border-[#30363d] rounded text-white focus:outline-orange-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm text-gray-400">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full mt-1 p-2 bg-[#0D1117] border border-[#30363d] rounded text-white focus:outline-orange-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {formik.errors.password}
            </p>
          )}
        </div>

        <p className="text-sm text-gray-400 text-center">
          Already have an account?
          <a href="/login" className="text-orange-500 ml-1">
            Login
          </a>
        </p>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded transition cursor-pointer"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
