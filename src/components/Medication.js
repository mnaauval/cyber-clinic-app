import React from "react";
import MedicationContent from "./MedicationContent";
const Medication = () => {
  return (
    <>
      <nav className="bg-accent2 px-4 py-2.5 w-full">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <form className="flex border border-accent sm:w-96 w-auto rounded-md">
            <input type="search" id="search_med" name="search_med" class="block p-2 w-full text-gray-900 bg-white rounded-lg  sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
            <button type="submit" className="w-[40px] overflow-hidden p-0 m-0  cursor-pointer ">
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </form>
          <div className="relative inline-block ml-5">
            <div>
              <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-2.5 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <div className="text-xl flex items-center">
                  <ion-icon name="cart-outline"></ion-icon>
                  <p className="inline-block text-sm">{10}</p>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </div>
              </button>
            </div>
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div className="py-1" role="none">
                <span className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">
                  Cart is empty
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <MedicationContent />
    </>
  );
};

export default Medication;
