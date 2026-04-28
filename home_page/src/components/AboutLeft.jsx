import React from 'react'

const AboutLeft = () => {
  return (
     <div className="w-full lg:w-1/2 space-y-6">
      <h4 className="text-xl font-bold tracking-widest text-[#1b2b4f] uppercase">
        <span className="text-cyan-500">»»</span> About RSSDI 2026
      </h4>

      <h1 className="text-3xl lg:text-6xl font-bold text-[#1b2b4f] leading-tight">
        Greetings from Namma Bengaluru!
      </h1>

      <p className="text-gray-600 leading-9 text-lg">
        It gives me immense pleasure to welcome you to the 54th Annual
        Conference of the Research Society for the Study of Diabetes in India
        (RSSDI), which will be held from 19th to 22nd November 2026 in the
        vibrant city of Bengaluru.
      </p>

      <p className="text-gray-600 leading-9 text-lg">
        The RSSDI Annual Conference has grown over the decades to become India’s
        largest and most prestigious academic gathering in the field of
        diabetes, attracting thousands of physicians, researchers, healthcare
        professionals, and industry partners from across the country and around
        the globe.
      </p>

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition">
        Read More
      </button>
    </div>
  )
}

export default AboutLeft