import React from "react";
import useRegister from "../utilities/useRegister";
import validateRegister from "../utilities/validateRegister";

const FormRegister = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useRegister(submitForm, validateRegister);

  return (
    <div class="h-full flex justify-center md:items-center md:flex-row flex-col mt-10">
      <div class="relative px-4 w-full max-w-4xl h-full md:h-auto">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg ">
          <form class="md:px-6 px-2 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={handleSubmit}>
            <h3 class="text-xl font-medium text-gray-900 ">Registrasi Pasien</h3>
            <div>
              <label htmlfor="full_name" class="block mb-2 text-sm font-medium text-gray-900 ">
                Nama Lengkap
              </label>
              <input type="text" name="full_name" id="full_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Nama Lengkap" value={values.full_name} onChange={handleChange} />
              {errors.full_name && <p className="text-red-500 text-xs italic mt-1">{errors.full_name}</p>}
            </div>
            <div>
              <p class="block mb-2 text-sm font-medium text-gray-900 ">Jenis Kelamin</p>
              <div class="flex items-center mb-2">
                <input id="male" type="radio" name="gender" value="Laki-laki" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-accent" required />
                <label htmlfor="male" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Laki-laki
                </label>
              </div>
              <div class="flex items-center mb-2">
                <input id="female" type="radio" name="gender" value="Perempuan" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-accent" />
                <label htmlfor="female" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Perempuan
                </label>
              </div>
              <div class="flex items-center mb-2">
                <input id="other" type="radio" name="gender" value="Lainnya" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-accent" />
                <label htmlfor="other" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Lainnya
                </label>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="md:mb-0 mb-4">
                <label htmlfor="phone" class="block mb-2 text-sm font-medium text-gray-900 ">
                  No. Telepon
                </label>
                <input type="tel" name="phone" id="phone" pattern="[0-9]{13}||[0-9]{12}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="081234567890" value={values.phone} onChange={handleChange} />
                {errors.phone && <p className="text-red-500 text-xs italic mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlfor="email" class="block mb-2 text-sm font-medium text-gray-900 ">
                  Email (Optional)
                </label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="nama@gmail.com" />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="md:mb-0 mb-4">
                <label htmlfor="place" class="block mb-2 text-sm font-medium text-gray-900 ">
                  Tempat Lahir
                </label>
                <input type="text" name="place" id="place" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Tempat Lahir" value={values.place} onChange={handleChange} />
                {errors.place && <p className="text-red-500 text-xs italic mt-1">{errors.place}</p>}
              </div>
              <div>
                <label htmlfor="birthday" class="block mb-2 text-sm font-medium text-gray-900 ">
                  Tanggal Lahir
                </label>
                <input type="date" name="birthday" id="birthday" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com" required />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="md:mb-0 mb-4">
                <label htmlfor="address" class="block mb-2 text-sm font-medium text-gray-900 ">
                  Alamat Lengkap
                </label>
                <input type="text" name="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Jl. Ahmad Yani 20 Kauman Kediri Jawa Timur" value={values.address} onChange={handleChange} />
                {errors.address && <p className="text-red-500 text-xs italic mt-1">{errors.address}</p>}
              </div>
              <div>
                <label htmlfor="post_code" class="block mb-2 text-sm font-medium text-gray-900 ">
                  Kode Pos
                </label>
                <input type="number" name="post_code" id="post_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="64444" value={values.post_code} onChange={handleChange} />
                {errors.post_code && <p className="text-red-500 text-xs italic mt-1">{errors.post_code}</p>}
              </div>
            </div>
            <div>
              <label htmlfor="floating_msg" class="block mb-2 text-sm font-medium text-gray-900">
                Keluhan Penyakit
              </label>
              <textarea id="message" rows="4" name="message" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder=" " value={values.message} onChange={handleChange}></textarea>
              {errors.message && <p className="text-red-500 text-xs italic mt-1">{errors.message}</p>}
            </div>
            <button type="submit" class="w-full text-white bg-accent hover:bg-accent4 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
              DAFTAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
