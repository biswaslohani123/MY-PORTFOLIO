import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-2'>

        <div>
            <Image alt='' src={assets.profile_img

            } className='rounded-full w-32'/>
            
        </div>

        <h3 className=' flex items-end gap-2 text-xl md:text-2xl mb-3 font-serif'>Hi! I'm Biwas Lohani <Image alt='' src={assets.hand_icon} className='w-6'/></h3>

        <h1 className='text-3xl sm:text-6xl lg:text-[66px]'>Full Stack Developer based in Nepal.</h1>
        <p className='font-serif max-w-2xl mx-auto'>
            I am a Web developer from Damauli,Tanahun with 2 years of experience.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact"  className='px-10 text-white py-3 border rounded-full border-gray-500 bg-black flex items-center gap-2'>Contact Me   <Image alt='' src={assets.right_arrow_white

            } className=' w-4'/></a>

            <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My Resume  <Image alt='' src={assets.right_arrow_white

            } className=' w-4'/></a>
        </div>
      
    </div>
  )
}

export default Header
