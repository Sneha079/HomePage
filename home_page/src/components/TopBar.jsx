import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#0f2347] text-white text-sm">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex flex-wrap  items-center gap-10">

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-sky-400 text-lg" />
          <span className="text-gray-300">rssdi2026@gmail.com</span>
        </div>

        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-sky-400 text-lg" />
          <span className="text-gray-300">+91 90993 31371</span>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-sky-400 text-lg" />
          <span className="text-gray-300">Clarks Exotica, Bengaluru</span>
        </div>

      </div>
    </div>
  );
};

export default TopBar;