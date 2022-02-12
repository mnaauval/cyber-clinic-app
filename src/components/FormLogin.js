import React from "react";
import useLogin from "../utilities/useLogin";
import validateLogin from "../utilities/validateLogin";

const FormLogin = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useLogin(submitForm, validateLogin);

  return (
    <figure className="bg-slate-300 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border-4 shadow-default py-10 px-1">
        <div className="relative bg-white rounded-lg m-4">
          <h1 class="text-2xl font-medium text-gray-900 text-center mb-4">Login ke akun Anda</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                Username
              </label>
              <input name="username" type="text" placeholder="Username" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" value={values.username} onChange={handleChange} />
              {errors.username && <p className="text-red-500 text-xs italic mb-3 mt-1">{errors.username}</p>}
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input name="email" type="email" placeholder="Email" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" value={values.email} onChange={handleChange} />
              {errors.email && <p className="text-red-500 text-xs italic mb-3 mt-1">{errors.email}</p>}
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input name="password" type="password" placeholder="Password" className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" value={values.password} onChange={handleChange} />
              {errors.password && <p className="text-red-500 text-xs italic mb-3 mt-1">{errors.password}</p>}
            </div>
            <div className="flex items-center mt-3 justify-center">
              <button type="submit" className="block py-2 px-4 bg-cover bg-accent rounded-lg text-white font-medium hover:bg-accent4">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </figure>
  );
};

export default FormLogin;
