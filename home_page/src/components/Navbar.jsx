import React, { useState } from "react";
import logo from "../assets/rssdi-bengaluru-logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const links = [
    "Home",
    "RSSDI 2026",
    "Committee",
    "Registration",
    "Scientific Program",
    "Abstract",
    "Faculty",
    "Downloads",
    "Contact Us",
  ];

  return (
    <div className="bg-white shadow px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-6 relative">
      
    
      <img src={logo} alt="RSSDI Logo" className="w-48 h-auto" />

      
      <div className="flex flex-wrap gap-5 text-gray-500 items-center">
        {links.map((link) => {
          const isDropdown =
            link === "RSSDI 2026" || link === "Committee";

          return (
            <div
              key={link}
              className="relative"
              onMouseEnter={() => isDropdown && setOpenMenu(link)}
              onMouseLeave={() => isDropdown && setOpenMenu(null)}
            >
              <a href="#" className="hover:text-black transition font-medium">
                {link}
              </a>

              
              {link === "RSSDI 2026" && (
                <div
                  className={`absolute top-10 left-0 w-72 bg-white rounded-2xl shadow-xl py-6 px-8 space-y-6 z-50 transition-all duration-300 ease-in-out origin-top ${
                    openMenu === link
                      ? "opacity-100 scale-y-100 translate-y-0 visible"
                      : "opacity-0 scale-y-95 -translate-y-2 invisible"
                  }`}
                >
                  <a href="#" className="block text-lg text-gray-700 hover:text-blue-600">
                    About RSSDI 2026
                  </a>
                  <a href="#" className="block text-lg text-gray-700 hover:text-blue-600">
                    About Venue
                  </a>
                  <a href="#" className="block text-lg text-gray-700 hover:text-blue-600">
                    Popular Destinations
                  </a>
                </div>
              )}

              
              {link === "Committee" && (
                <div
                  className={`absolute top-10 left-0 w-80 bg-white rounded-2xl shadow-xl py-6 px-8 space-y-6 z-50 transition-all duration-300 ease-in-out origin-top ${
                    openMenu === link
                      ? "opacity-100 scale-y-100 translate-y-0 visible"
                      : "opacity-0 scale-y-95 -translate-y-2 invisible"
                  }`}
                >
                  <a href="#" className="block text-lg text-gray-700 hover:text-blue-600">
                    Organizing Committee
                  </a>
                  <a href="#" className="block text-lg text-gray-700 hover:text-blue-600">
                    Executive Committee
                  </a>
                  <a href="#" className="block text-lg text-gray-700 hover:text-blue-600">
                    KRSSDI Committee
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;