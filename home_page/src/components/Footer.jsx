import React from "react";
import  logoo from "../assets/rssdi-bengaluru-logo.png";
import logo2 from "../assets/footerlogo.png";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f2247] text-white pt-16 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
        
        
        <div>
          <h2 className="text-2xl font-bold mb-8">Conference Secretariat</h2>

          <div className="bg-white rounded-[28px] border border-orange-300 p-4 w-[200px] mb-6">
            <img
              src={logoo}
              alt="Logo"
              className="w-full object-contain"
            />
          </div>

          <h3 className="text-l font-semibold mb-4">
            RSSDI- Karnataka Chapter
          </h3>

          <p className="flex gap-3 text-gray-300 text-l leading-relaxed mb-4">
            <FaMapMarkerAlt className="mt-1 shrink-0" />
            No.56, 8th Cross, Wilson Garden Bangalore 560027
          </p>

          <p className="flex items-center gap-3 text-gray-300 text-l">
            <FaEnvelope />
            rssdi2026@gmail.com
          </p>
        </div>

        
        <div>
          <h2 className="text-2xl font-bold mb-8">Quick Links</h2>

          <ul className="space-y-5 text-l text-gray-200 font-medium">
            <li className=" cursor-pointer">About Us</li>
            <li className=" cursor-pointer">Committee</li>
            <li className="cursor-pointer">About Venue</li>
            <li className="cursor-pointer">Abstract</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-2xl font-bold leading-tight mb-8">
            Professional Conference Organizer
          </h2>

          <div className="bg-white p-2 w-[100px] mb-6">
            <img
              src={logo2}
              alt="RX Logo"
              className="w-full object-contain"
            />
          </div>

          <h3 className="text-l font-semibold mb-4">Rx Events Pvt Ltd</h3>

          <p className="text-gray-300 text-l leading-relaxed mb-4">
            401, Shyamak Complex, opp. Sahjanand College, Ambawadi,
            Ahmedabad, Gujarat 380015
          </p>

          <p className="flex gap-3 text-l mb-3">
            <FaPhoneAlt className="mt-1" />
            <span>9099331371</span>
          </p>

          <p className="flex gap-3 text-l mb-3">
            <FaEnvelope className="mt-1" />
            <span>contact@rxevents.co.in</span>
          </p>

          <p className="flex gap-3 text-l">
            <FaGlobe className="mt-1" />
            <span>rxevents.co.in</span>
          </p>
        </div>
      </div>

    
      <div className="border-t border-gray-600 mt-16 pt-6 text-center text-gray-400 text-lg">
        © All Copyright 2026 by RSSDI 2026 | Design and Developed by
        Enlacecode Technology Pvt. Ltd.
      </div>
    </footer>
  );
}