"use client";
import { useState } from "react";
import Image from 'next/image'
import MIntBg from '../assets/image/MintBeer.webp'
import MIntGlass from '../assets/image/NitGlass.webp'
import MIntUprShadow from '../assets/image/MintUprShodow.webp'
import MIntDownShadow from '../assets/image/MintDownShodow.webp'
import CommonButton from "./CommonButton";
const MintNft = () => {
    const [value, setvalue] = useState(3);
    function AddValue() {
        if (value >= 0, value < 9) {
            setvalue(value + 1)
        }
    }
    function SubtractValue() {
        if (value > 1) {
            setvalue(value - 1)
        }
    }
    return (
        <div className='bg-[url(../assets/image/MintBG.webp)] bg-cover bg-no-repeat bg-center relative'>
            <div className=' absolute top-0'><Image src={MIntUprShadow} alt='Shadow' /></div>
            <div className=' absolute bottom-0'><Image src={MIntDownShadow} alt='Shadow' /></div>
            <div className='container max-w-[1140px]'>
                <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 sm:pt-14 md:pt-16 lg:pt-[84px] pb-12 items-center w-full">
                    <div className=' flex justify-center'>
                        <Image src={MIntBg} alt='MintWishky' />
                        <div className="flex items-end mb-6 ml-[35px]">
                            <Image src={MIntGlass} alt='MintGlass' />
                        </div>
                    </div>
                    <div className='flex w-full max-lg:mt-8 justify-center'>
                        <div className='flex flex-col max-w-[600px] lg:max-w-[494px] w-full'>
                            <h2 className='text-white font-azo font-normal leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] uppercase'>Mint NFT</h2>
                            <div className=' mt-5 sm:mt-[28px] md:mt-[35px] lg:mt-[51px] flex justify-between w-full'>
                                <div className='flex flex-col'>
                                    <p className=' font-Montserrat font-black text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl'>9999 </p>
                                    <p className=' font-Montserrat text-white font-normal text-xs sm:text-base mt-2 sm:mt-[14px]'>of 10,000 minted</p>
                                </div>
                                <div className='flex flex-col mr-14'>
                                    <p className=' font-Montserrat font-black text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl'>.2 ETH </p>
                                    <p className=' font-Montserrat text-white font-normal text-xs sm:text-base mt-2 sm:mt-[14px]'>per NFT</p>
                                </div>
                            </div>
                            <div className='mt-3 sm:mt-5 md:mt-6 lg:mt-[31px] flex justify-between w-full'>
                                <div className='flex flex-col'>
                                    <p className=' font-Montserrat font-black text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Max 9 </p>
                                    <p className=' font-Montserrat text-white font-normal text-xs sm:text-base mt-2 sm:mt-[14px]'>NFTs per transaction</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className=' font-Montserrat font-black text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Max 2</p>
                                    <p className=' font-Montserrat text-white font-normal text-xs sm:text-base mt-2 sm:mt-[14px]'>Transaction per wallet</p>
                                </div>
                            </div>
                            <div className="flex mt-5 sm:mt-7 md:mt-10 lg:mt-12">
                                <button onClick={SubtractValue} className='text-black font-Montserrat font-black rounded bg-white py-[10px] sm:py-2 px-4 sm:px-[30px] text-4xl'>-</button>
                                <p className=' text-white bg-transparent rounded border border-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-Montserrat font-black ml-[14px] mr-[11px] lg:max-w-80 w-full flex items-center justify-center'>0{value}</p>
                                <button onClick={AddValue} className='text-black font-Montserrat font-black rounded bg-white py-2 sm:py-[13px] px-4 sm:px-[30px] text-4xl'>+</button>
                            </div>
                            <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-[29px] w-full flex">
                                <CommonButton text="MINT NOW" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintNft
