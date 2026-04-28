import React from 'react'
import { FaUsers } from "react-icons/fa";

const Card = ({ title }) => {
  return (
    <div className="group relative w-[430px] h-[95px] bg-white rounded-xl overflow-hidden shadow-md cursor-pointer flex items-center">

      <div className="absolute inset-0 bg-orange-500 -translate-x-full group-hover:translate-x-0 transition-all duration-500 duration-500 z-0"></div>

      <div className="relative z-10 w-[95px] h-full bg-orange-500 flex items-center justify-center">
        <FaUsers className="text-white text-3xl" />
      </div>

      <div className="relative z-10 px-6 text-[#1b2945] text-2xl font-bold leading-tight group-hover:text-white transition duration-300">
        {title}
      </div>

    </div>
  )
}

export default Card;