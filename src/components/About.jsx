import React from 'react'
import { AboutSecEllipse } from './Icons'
import cars from '../assets/image/CarsImage.webp'
import watches from '../assets/image/WatchesImage.webp'
import boat from '../assets/image/BoatsImage.webp'
import '../app/app.css'
import Image from 'next/image'
const About = () => {
    return (
        <div className='container max-w-[1140px] relative flex pt-7 sm:pt-10 md:pt-16 lg:pt-[100px] xl:pt-[200px] pb-10 sm:pb-[50px] md:pb-[80px] xl:pb-[119px]'>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
                <div className='flex flex-col w-full max-xl:items-center'>
                    <h2 className='text-white font-azo font-normal leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] uppercase'>About </h2>
                    <p className='font-normal font-Montserrat text-white text-xs sm:text-base leading-6 max-w-[700px] max-xl:text-center xl:max-w-[512px]'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. </p>
                </div>
                <div>
                    <div className="container1 mx-auto my-[4%] w-[210px] h-[140px] relative">
                        <div className=" w-[187px] h-[216px] bg-[#FDDA60] animate-pulse blur-[131px] absolute"></div>
                        <div id="carousel" className='w-full h-full absolute'>
                            <figure className='SliderPosition'><Image className=' max-sm:max-w-[90px] max-md:max-w-[120px] max-xl:max-w-[150px] rounded border-[3px] border-[#FDDA60]' id='slider' src={cars} alt="car" /></figure>
                            <figure className='SliderPosition'><Image className=' max-sm:max-w-[90px] max-md:max-w-[120px] max-xl:max-w-[150px] rounded border-[3px] border-[#FDDA60]' id='slider1' src={watches} alt="Car" /></figure>
                            <figure className='SliderPosition'><Image className=' max-sm:max-w-[90px] max-md:max-w-[120px] max-xl:max-w-[150px] rounded border-[3px] border-[#FDDA60]' id='slider2' src={boat} alt="boast" /></figure>
                            <figure className='SliderPosition'><Image className=' max-sm:max-w-[90px] max-md:max-w-[120px] max-xl:max-w-[150px] rounded border-[3px] border-[#FDDA60]' id='slider3' src={cars} alt="boast" /></figure>
                            <figure className='SliderPosition'><Image className=' max-sm:max-w-[90px] max-md:max-w-[120px] max-xl:max-w-[150px] rounded border-[3px] border-[#FDDA60]' id='slider4' src={watches} alt="watches" /></figure>
                            <figure className='SliderPosition'><Image className=' max-sm:max-w-[90px] max-md:max-w-[120px] max-xl:max-w-[150px] rounded border-[3px] border-[#FDDA60]' id='slider5' src={cars} alt="car" /></figure>
                            <figure className='SliderPosition'><Image className=' max-sm:max-w-[90px] max-md:max-w-[120px] max-xl:max-w-[150px] rounded border-[3px] border-[#FDDA60]' id='slider6' src={boat} alt="boast" /></figure>
                            <figure className='SliderPosition'><Image className=' max-sm:max-w-[90px] max-md:max-w-[120px] max-xl:max-w-[150px] rounded border-[3px] border-[#FDDA60]' id='slider7' src={watches} alt="watches" /></figure>
                            <figure className='SliderPosition'><Image className=' max-sm:max-w-[90px] max-md:max-w-[120px] max-xl:max-w-[150px] rounded border-[3px] border-[#FDDA60]' id='slider6' src={boat} alt="boast" /></figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' absolute right-0 top-0 -z-10'><AboutSecEllipse /></div>
        </div>
    )
}

export default About
