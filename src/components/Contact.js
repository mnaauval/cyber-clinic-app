import React from "react";
import "../index.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-full ">
      <h1 className="lg:text-5xl md:text-4xl text-3xl text-center mt-6">Hubungi Kami</h1>
      <iframe title="maps" src="https://www.google.com/maps/d/embed?mid=1kD4d0uI2A8cD_NiU1FOL8pkjuyg&ehbc=2E312F" className="h-[400px] w-full mt-6"></iframe>
      <div className="flex justify-center md:items-center md:flex-row flex-col mt-10">
        <div className="md:w-2/5 md:px-1 px-6 py-10 w-full">
          <form onSubmit={handleSubmit}>
            <div class="grid xl:grid-cols-2 xl:gap-6">
              <div class="relative z-0 mb-7 w-full group">
                <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_first_name" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Nama awal
                </label>
              </div>
              <div class="relative z-0 mb-7 w-full group">
                <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_last_name" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Nama akhir
                </label>
              </div>
            </div>
            <div class="relative z-0 mb-7 w-full group">
              <input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_email" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email
              </label>
            </div>
            <div class="relative z-0 mb-7 w-full group">
              <input type="text" name="floating_subject_msg" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label for="floating_subject_msg" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Subjek Pesan
              </label>
            </div>
            <div class="relative z-0 mb-4 w-full group">
              <textarea id="message" rows="4" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
              <label for="floating_msg" class="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Deskripsi Pesan
              </label>
            </div>
            <button type="submit" className="w-full block py-2 bg-cover bg-accent rounded-lg text-white font-medium hover:bg-accent4">
              KIRIM
            </button>
          </form>
        </div>

        <hr className="my-hr my-10 md:hidden" />

        <div className="md:ml-20 md:m-0 m-auto">
          <h1 className="text-accent text-2xl mb-5">
            Alamat <span className="font-bold">Kantor</span>
          </h1>
          <p className="my-0.5 ">
            <ion-icon name="location"></ion-icon>
            <span className="font-bold"> Alamat:</span> Metro Indah Mall (MIM) Blok F20
          </p>
          <p className="my-0.5">Jl. Soekarno Hatta Bandung Jawa Barat</p>
          <p className="my-0.5">
            <ion-icon name="call"></ion-icon>
            <span className="font-bold"> Telp:</span> 022 - 87505214
          </p>
          <p className="my-0.5">
            <ion-icon name="phone-portrait"></ion-icon>
            <span className="font-bold"> Selular:</span> 0878 2418 4753
          </p>
          <p className="my-0.5">
            <ion-icon name="mail"></ion-icon>
            <span className="font-bold"> Email: </span>
            <a href="http://inovamedika.com/" className="text-accent hover:underline hover:text-black">
              info@inovamedika.com
            </a>
          </p>
          <br />
          <p className="my-0.5">
            <ion-icon name="business"></ion-icon> <span className="font-bold"> Branch Office:</span>
          </p>
          <p className="my-0.5">Jl. Manyar Indah Raya No 7b</p>
          <p className="my-0.5">Surabaya Jawa Timur</p>
          <p className="my-0.5">
            <ion-icon name="call"></ion-icon> 0315951039
          </p>

          <hr className="my-hr my-5" />

          <h1 className="text-accent text-2xl mb-5">
            Waktu <span className="font-bold">Pelayanan</span>
          </h1>
          <p> Senin - Jumat, Pukul 09.00 WIB - 17.00 WIB</p>
        </div>

        <hr className="my-hr mt-10 md:hidden" />
      </div>
    </div>
  );
};

export default Contact;
