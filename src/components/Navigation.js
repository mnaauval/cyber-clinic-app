import { useState } from "react";

const Navigation = () => {
  const Links = [
    { title: "HOME", url: "/" },
    { title: "TENTANG KAMI", url: "/about" },
    { title: "DAFTAR", url: "/register" },
    { title: "KONTAK", url: "/contact" },
    // { title: "TAGIHAN", url: "/bill" },
    // { title: "LOGIN", url: "/login" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-accent2 px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex">
          <span className="text-3xl text-accent mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <span className="text-accent3 self-center text-lg font-semibold whitespace-nowrap">CyberMedic</span>
        </a>
        <div onClick={() => setIsOpen(!isOpen)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={isOpen ? "close-outline" : "menu-outline"}></ion-icon>
        </div>
        <div className={`w-full md:block md:w-auto ${isOpen ? "visible" : "hidden"}`}>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {Links.map((link) => (
              <li key={link.title}>
                <a href={link.url} className="block py-2 px-4 rounded-lg sm:text-center text-accent font-medium hover:bg-accent hover:text-white">
                  {link.title}
                </a>
              </li>
            ))}
            <button type="button" className="block md:mt-0 mt-3 bg-cover bg-accent rounded-lg text-white font-medium hover:bg-accent4">
              <a href="/login" className="inline-block py-2 px-4">
                LOGIN
              </a>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
