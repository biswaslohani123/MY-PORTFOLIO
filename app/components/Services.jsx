import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg '>What i offer</h4>
      <h2 className='text-center text-5xl '>My Services</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 '>I am a Full Stack Developer from Damauli,Tanahun with 2 years of exiperence .</p>

      <div className=''>
        {serviceData.map(({icon, title, description, link}, index) => {
            return <div key={index}>
                <Image alt='' src={icon} className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
            </div>
        })}
      </div>

    </div>
  )
}

export default Services
