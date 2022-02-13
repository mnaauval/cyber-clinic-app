import React from "react";
import { useSelector } from "react-redux";

const Medication = () => {
  const registerData = useSelector((state) => state.register.value);

  return (
    <>
      <nav className="bg-accent2 px-4 py-2.5 w-full">
        <div className="container flex flex-wrap justify-center items-center mx-auto">
          <form className="flex border border-accent sm:w-1/2 w-auto rounded-md">
            <input type="search" id="search_med" name="search_med" className="block p-2 w-full text-gray-900 bg-white rounded-lg  sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
            <button type="submit" className="w-[40px] overflow-hidden p-0 m-0  cursor-pointer ">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </form>
        </div>
      </nav>
      <div className="h-full flex justify-center md:items-center md:flex-row flex-col mt-10">
        <div className="relative px-4 w-full max-w-4xl h-full md:h-auto">
          {registerData.map((data) => {
            return (
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex sm:flex-row flex-col justify-between" key={data.id}>
                <div className="">
                  <p>{data.full_name}</p>
                  <p>{data.age}</p>
                  <p>{data.gender}</p>
                </div>
                <form className="flex flex-col items-center">
                  <div className="flex flex-row max-h-20 items-center">
                    <input type="text" name="drugs_name" id="drugs_name" className=" border border-gray-500 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 mx-2" placeholder="Nama obat" />
                    <input type="text" name="drugs_total" id="drugs_total" className=" border border-gray-500 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 mx-2" placeholder="Jumlah" />
                    <div>
                      <input type="text" name="drugs_dose" id="drugs_dose" className=" border border-gray-500 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 mx-2" placeholder="Dosis" />
                      <p className="text-center">x</p>
                      <input type="text" name="drugs_dose" id="drugs_dose" className=" border border-gray-500 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 mx-2" placeholder="Dosis" />
                    </div>
                  </div>
                  <button type="submit" className="w-1/4 text-white bg-accent hover:bg-accent4 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2 text-center mt-3">
                    CHECKOUT
                  </button>
                </form>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Medication;
