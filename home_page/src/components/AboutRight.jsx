import React from 'react'
import mem1 from "../assets/member1.png";
import mem2 from "../assets/member2.jpg";
import mem3 from "../assets/member3.png";

const AboutRight = () => {
    const members = [
  {
    name: "Dr K M Prasanna Kumar",
    role: "CHAIRMAN & NATIONAL PATRON",
    image: mem1,
  },
  {
    name: "Dr L Sreenivasamurthy",
    role: "ORGANISING SECRETARY",
    image: mem2,
  },
  {
    name: "Dr Karthik Munichoodappa",
    role: "ORGANISING SECRETARY",
    image: mem3,
  },
];
  return (
    <div className="w-full lg:w-1/2 h-[700px] overflow-y-auto pr-3 space-y-8">
      {members.map((member, index) => (
        <div
          key={index}
          className="relative bg-white rounded-bl-[30px] rounded-tr-[30px] rounded-br-[30px] shadow-md overflow-hidden"
        >
          
          <div className="px-10 py-10 bg-[#f8f8f8]">
            <h2 className="text-3xl font-bold text-[#1b2b4f]">
              {member.name}
            </h2>
          </div>

        
          <div className="bg-cyan-500 text-white px-10 py-5 text-lg tracking-widest">
            {member.role}
          </div>

          
          <div className="absolute top-4 right-6 w-32 h-32 rounded-full border-[6px] border-cyan-600 bg-white p-1">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default AboutRight