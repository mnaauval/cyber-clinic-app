import React from "react";
import useContact from "../utilities/useContact";
import validataeContact from "../utilities/validateContact";

const ContactForm = () => {
  const { handleChange, values, handleSubmit, errors } = useContact(validataeContact);

  return (
    <div className="md:w-2/5 md:px-1 px-6 py-10 w-full">
      <form onSubmit={handleSubmit}>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 mb-7 w-full group">
            <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={values.floating_first_name} onChange={handleChange} />
            <label htmlFor="floating_first_name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Nama depan
            </label>
            {errors.floating_first_name && <p className="text-red-500 text-xs italic mb-3 mt-1">{errors.floating_first_name}</p>}
          </div>
          <div className="relative z-0 mb-7 w-full group">
            <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={values.floating_last_name} onChange={handleChange} />
            <label htmlFor="floating_last_name" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Nama belakang
            </label>
            {errors.floating_last_name && <p className="text-red-500 text-xs italic mb-3 mt-1">{errors.floating_last_name}</p>}
          </div>
        </div>
        <div className="relative z-0 mb-7 w-full group">
          <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={values.floating_email} onChange={handleChange} />
          <label htmlFor="floating_email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email
          </label>
          {errors.floating_email && <p className="text-red-500 text-xs italic mb-3 mt-1">{errors.floating_email}</p>}
        </div>
        <div className="relative z-0 mb-7 w-full group">
          <input type="text" name="floating_subject_msg" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={values.floating_subject_msg} onChange={handleChange} />
          <label htmlFor="floating_subject_msg" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Subjek Pesan
          </label>
          {errors.floating_subject_msg && <p className="text-red-500 text-xs italic mb-3 mt-1">{errors.floating_subject_msg}</p>}
        </div>
        <div className="relative z-0 mb-4 w-full group">
          <textarea id="floating_msg" rows="4" name="floating_msg" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={values.floating_msg} onChange={handleChange}></textarea>
          <label htmlFor="floating_msg" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Deskripsi Pesan
          </label>
          {errors.floating_msg && <p className="text-red-500 text-xs italic mb-3 mt-1">{errors.floating_msg}</p>}
        </div>
        <button type="submit" className="w-full block py-2 bg-cover bg-accent rounded-lg text-white font-medium hover:bg-accent4">
          KIRIM
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
