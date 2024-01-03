import React from 'react'
import { AboutSecEllipse } from './Icons'

const About = () => {
    return (
        <div className='container max-w-[1140px] mt-6 sm:mt-10 md:mt-14 lg:mt-[130px] mb-4 sm:mb-8 md:mb-12 lg:mb-[84px] relative'>
            <div className="grid grid-cols-2 items-center">
                <div className='flex flex-col'>
                    <h2 className='text-white font-azo font-normal leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] uppercase'>About </h2>
                    <p className='font-normal font-Montserrat text-white text-xs sm:text-base leading-6'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                </div>
                <div>
                </div>
            </div>
                    <div className=' absolute right-0 top-0'><AboutSecEllipse /></div>
        </div>
    )
}

export default About
