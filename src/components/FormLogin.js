import React from "react";
import useForm from "../utilities/useForm";
import validateInfo from "../utilities/validateInfo";

const FormLogin = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo);

  return (
    <figure className="bg-slate-300 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border-4 shadow-default py-10 px-1">
        <blockquote className="text-2xl font-medium text-center">
          <p className="text-lg font-semibold">Welcome to Cyber Medic</p>
        </blockquote>
        <div className="text-primary m-6">
          <div className="flex items-center mt-3 justify-center">
            <h1 className="text-2xl font-medium text-primary mt-4 mb-2">Login to your account</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="text-left">Username</label>
            <input name="username" type="text" placeholder="Username" className={"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-2"} value={values.username} onChange={handleChange} />
            {errors.username && <p className="text-red-500 text-xs italic mb-3">{errors.username}</p>}
            <label className="text-left">Email</label>
            <input name="email" type="email" placeholder="Email" className={"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-2"} value={values.email} onChange={handleChange} />
            {errors.email && <p className="text-red-500 text-xs italic mb-3">{errors.email}</p>}
            <label>Password</label>
            <input name="password" type="password" placeholder="Password" className={"w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-2"} value={values.password} onChange={handleChange} />
            {errors.password && <p className="text-red-500 text-xs italic mb-3">{errors.password}</p>}
            <div className="flex items-center mt-3 justify-center">
              <button type="button" className="block py-2 px-4 bg-cover bg-accent rounded-lg text-white font-medium hover:bg-accent4">
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
