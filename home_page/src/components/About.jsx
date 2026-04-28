import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'

const About = () => {
  return (
    <section className="bg-[#eef1f5] px-6 lg:px-16 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <AboutLeft />
        <AboutRight />
      </div>
    </section>
  )
}

export default About