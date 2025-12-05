import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work'  className='w-full px-[12%] py-10 scroll-mt-20'>
       <h4 className='text-center mb-2 text-lg '>My portfolio</h4>
      <h2 className='text-center text-5xl '>My latest work</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-500 transition-all duration-300 hover:text-black hover:translate-y-1'>welcome to my web development portfolio! Explore collection of my projects.   
        </p>

  <div className="grid grid-cols-4 gap-10">
  
  {/* Item 1 */}
  <div className="group flex flex-col">
    <Image 
      alt="" 
      className="rounded-xl w-full h-48 object-cover shadow-md group-hover:scale-[1.02] transition-all duration-300"
      src={assets.work_one}
    />
    <div className="w-full h-0.5 bg-linear-to-r from-gray-200 to-gray-400 my-3"></div>
    <p className="text-gray-700 text-sm group-hover:text-black transition-all duration-200 font-bold">QuickGpt</p>
  </div>

  {/* Item 2 */}
  <div className="group flex flex-col">
    <Image 
      alt="" 
      className="rounded-xl w-full h-48 object-cover shadow-md group-hover:scale-[1.02] transition-all duration-300"
      src={assets.work_two}
    />
    <div className="w-full h-0.5 bg-linear-to-r from-gray-200 to-gray-400 my-3"></div>
    <p className="text-gray-700 text-sm group-hover:text-black transition-all duration-200 font-bold">Doctor Appointment</p>
  </div>

  {/* Item 3 */}
  <div className="group flex flex-col ">
    <Image 
      alt="" 
      className="rounded-xl w-full h-48 object-cover shadow-md group-hover:scale-[1.02] transition-all duration-300"
      src={assets.work_three}
    />
    <div className="w-full h-0.5 bg-linear-to-r from-gray-200 to-gray-400 my-3"></div>
    <p className="text-gray-700 text-sm group-hover:text-black transition-all duration-200 font-bold">Online Food Delivery</p>
  </div>

  {/* Item 4 */}
  <div className="group flex flex-col">
    <Image 
      alt="" 
      className="rounded-xl w-full h-48 object-cover shadow-md group-hover:scale-[1.02] transition-all duration-300"
      src={assets.work_four}
    />
    <div className="w-full h-0.5 bg-linear-to-r from-gray-200 to-gray-400 my-3"></div>
    <p className="text-gray-700 text-sm group-hover:text-black transition-all duration-200 font-bold">Movie Ticket Booking</p>
  </div>

</div>

<a href="#" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 transform transition-all duration-300 hover:bg-gray-600 hover:text-white hover:scale-105'>
    Show More <Image src={assets.right_arrow_bold} alt='' className='w-4'/>
</a>




    </div>
  )
}

export default Work
