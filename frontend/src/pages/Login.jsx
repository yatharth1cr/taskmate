import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Login data:", values);
      // Add login API logic here
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161B22] p-6">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-[#161B22] border border-[#30363d] text-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-orange-700">
          Login to TaskMate
        </h2>

        <div>
          <label htmlFor="email" className="block text-sm font-medium ">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full mt-1 p-2 border rounded focus:outline-orange-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm text-red-500 mt-1">{formik.errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium ">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full mt-1 p-2 border rounded focus:outline-orange-500"
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
        <p className="text-m text-gray-500 text-center m-4">
          Not a user?
          <a href="/signup" className="text-orange-700">
            signup
          </a>
        </p>

        <button
          type="submit"
          className="w-full bg-orange-700 text-white py-2 px-4 rounded hover:bg-orange-800 transition cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
