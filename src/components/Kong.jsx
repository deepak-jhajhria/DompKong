"use client";
import { useState } from 'react'
import KongFirst from '../assets/image/kong.webp'
import Kongshow1 from '../assets/image/KongShow1.webp'
import Kongshow2 from '../assets/image/KongShow2.webp'
import Kongshow3 from '../assets/image/KongShow3.webp'
import Kongshow4 from '../assets/image/KongShow4.webp'
import Kongshow5 from '../assets/image/KongShow5.webp'
import Kongshow6 from '../assets/image/KongShow6.webp'
import Kongshow7 from '../assets/image/KongShow7.webp'
import Kongshow8 from '../assets/image/KongShow8.webp'
import Kongshow9 from '../assets/image/KongShow9.webp'
import Kongshow10 from '../assets/image/KongShow10.webp'
import Kong1 from '../assets/image/1Kong.webp'
import Kong2 from '../assets/image/2Kong.webp'
import Kong3 from '../assets/image/3Kong.webp'
import Kong4 from '../assets/image/4Kong.webp'
import Kong5 from '../assets/image/5Kong.webp'
import Kong6 from '../assets/image/6Kong.webp'
import Kong7 from '../assets/image/7Kong.webp'
import Kong8 from '../assets/image/8Kong.webp'
import Kong9 from '../assets/image/9Kong.webp'
import Kong10 from '../assets/image/10Kong.webp'
import Image from 'next/image'
import { BackGroundEllipse } from './Icons';
const Kong = () => {
    const [tab, setTabs] = useState("tab1")
    function tabChange(tabs) {
        setTabs(tabs)
    }
    return (
        <div className='flex w-full overflow-hidden mt-1 relative'>
            <div className=' absolute top-[36%] left-[42%]'><BackGroundEllipse /></div>
            <div className='grid grid-cols-1 sm:grid-cols-4 w-full mx-auto gap-6 relative'>
            <h2 className='text-white font-azo font-normal leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] w-full uppercase absolute top-0 sm:top-6 text-center'>The Kongs</h2>
                <div className='col-span-1'>
                    <div className='flex sm:flex-col justify-around max-xs:pt-12 max-sm:pt-14'>
                        <div className='sm:flex sm:justify-start sm:-translate-x-7'>
                            <Image onClick={() => tabChange("tab2")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded-full sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong1} alt='Kong' />
                        </div>
                        <div className='sm:flex sm:justify-center sm:mt-[35px]'>
                            <Image onClick={() => tabChange("tab3")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded-full sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong2} alt='Kong' />
                        </div>
                        <div className='sm:flex sm:justify-end sm:mt-[30px]'>
                            <Image onClick={() => tabChange("tab4")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded-full sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong3} alt='Kong' />
                        </div>
                        <div className='sm:flex sm:justify-center sm:mt-[30px]'>
                            <Image onClick={() => tabChange("tab5")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded-full sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong4} alt='Kong' />
                        </div>
                        <div className='sm:flex sm:justify-start sm:-translate-x-7 sm:mt-[35px]'>
                            <Image onClick={() => tabChange("tab6")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded-full sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong5} alt='Kong' />
                        </div>
                    </div>
                </div>
                <div className='sm:col-span-2 max-xs:mb-4 max-sm:mb-10 sm:mt-[29px]'>
                    {tab === "tab1" &&
                        <div className='flex justify-center items-center'>
                            <Image src={KongFirst} alt='kong' />
                        </div>
                    }
                    {tab === "tab2" &&
                        <div className='flex justify-center items-center'>
                            <Image src={Kongshow1} alt='kong' />
                        </div>
                    }
                    {tab === "tab3" &&
                        <div className='flex justify-center items-center'>
                            <Image src={Kongshow2} alt='kong' />
                        </div>
                    }
                    {tab === "tab4" &&
                        <div className='flex justify-center items-center'>
                            <Image src={Kongshow3} alt='kong' />
                        </div>
                    }
                    {tab === "tab5" &&
                        <div className='flex justify-center items-center'>
                            <Image src={Kongshow4} alt='kong' />
                        </div>
                    }
                    {tab === "tab6" &&
                        <div className='flex justify-center items-center'>
                            <Image src={Kongshow5} alt='kong' />
                        </div>
                    }
                    {tab === "tab7" &&
                        <div className='flex justify-center items-center'>
                            <Image src={Kongshow6} alt='kong' />
                        </div>
                    }
                    {tab === "tab8" &&
                        <div className='flex justify-center items-center'>
                            <Image src={Kongshow7} alt='kong' />
                        </div>
                    }
                    {tab === "tab9" &&
                        <div className='flex justify-center items-center'>
                            <Image src={Kongshow8} alt='kong' />
                        </div>
                    }
                    {tab === "tab10" &&
                        <div className='flex justify-center items-center'>
                            <Image src={Kongshow9} alt='kong' />
                        </div>
                    }
                    {tab === "tab11" &&
                        <div className='flex justify-center items-center'>
                            <Image src={Kongshow10} alt='kong' />
                        </div>
                    }
                </div>
                <div className='col-span-1'>
                    <div className="flex sm:flex-col justify-around max-sm:pb-5">
                        <div className='sm:flex sm:justify-end sm:translate-x-7 '>
                            <Image onClick={() => tabChange("tab7")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded-full sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong6} alt='Kong' />
                        </div>
                        <div className='sm:flex sm:justify-center sm:mt-[35px]'>
                            <Image onClick={() => tabChange("tab8")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded-full sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong7} alt='Kong' />
                        </div>
                        <div className='sm:flex sm:justify-start sm:mt-[30px]'>
                            <Image onClick={() => tabChange("tab9")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded-full sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong8} alt='Kong' />
                        </div>
                        <div className='sm:flex sm:justify-center sm:mt-[30px]'>
                            <Image onClick={() => tabChange("tab10")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded-full sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong9} alt='Kong' />
                        </div>
                        <div className='sm:flex sm:justify-end sm:translate-x-7 sm:mt-[35px]'>
                            <Image onClick={() => tabChange("tab11")} className=' border xs:border-[2px] sm:border-[4px] border-[#FDDA60] rounded-full sm:rounded-lg shadow-[0_1px_5px_2px_rgba(253,218,96,20.88)] sm:shadow-[0_1px_15px_2px_rgba(253,218,96,20.88)] max-xs:max-w-[45px] max-sm:max-w-[60px] max-md:max-w-[80px] max-lg:max-w-[100px] max-xl:max-w-[140px]' src={Kong10} alt='Kong' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Kong
