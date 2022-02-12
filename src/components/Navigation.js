import { useState } from "react";

const Navigation = () => {
  const Links = [
    { title: "HOME", url: "/" },
    // { title: "TENTANG KAMI", url: "/about" },
    { title: "DAFTAR", url: "/register" },
    { title: "KONTAK", url: "/contact" },
    { title: "TINDAKAN", url: "/medication" },
    // { title: "LOGIN", url: "/login" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-accent2 px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex">
          <span className="md:text-4xl text-5xl text-accent mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <span className="md:block hidden text-accent3 self-center text-lg font-semibold whitespace-nowrap">CyberMedic</span>
        </a>
        <div onClick={() => setIsOpen(!isOpen)} className="text-5xl absolute right-4 top-6 cursor-pointer sm:hidden">
          <ion-icon name={isOpen ? "close-outline" : "menu-outline"}></ion-icon>
        </div>
        <div className={`w-full sm:block sm:w-auto ${isOpen ? "visible" : "hidden"}`}>
          <ul className="flex flex-col mt-4 sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium">
            {Links.map((link) => (
              <li key={link.title}>
                <a href={link.url} className="block py-2 px-4 rounded-lg sm:text-center text-accent font-medium hover:bg-accent hover:text-white">
                  {link.title}
                </a>
              </li>
            ))}
            <button type="button" className="block sm:mt-0 mt-3 bg-cover bg-accent rounded-lg text-white font-medium hover:bg-accent4">
              <a href="/login" className="sm:inline-block block py-2 px-4">
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
