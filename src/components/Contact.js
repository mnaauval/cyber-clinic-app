import React from "react";
import "../index.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="h-full ">
      <h1 className="lg:text-5xl md:text-4xl text-3xl text-center mt-6">Hubungi Kami</h1>
      <iframe title="maps" src="https://www.google.com/maps/d/embed?mid=1kD4d0uI2A8cD_NiU1FOL8pkjuyg&ehbc=2E312F" className="h-[400px] w-full mt-6"></iframe>
      <div className="flex justify-center md:items-center md:flex-row flex-col mt-10">
        <ContactForm />

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
