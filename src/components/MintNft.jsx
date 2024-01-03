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
                <div className="grid grid-cols-2 pt-[74px] pb-12 items-center">
                    <div className=' flex'>
                        <Image src={MIntBg} alt='MintWishky' />
                        <div className="flex items-end mb-6 ml-[35px]">
                            <Image src={MIntGlass} alt='MintGlass' />
                        </div>
                    </div>
                    <div className='flex w-full'>
                        <div className='flex flex-col max-w-[494px] w-full'>
                            <h2 className='text-white font-azo font-normal leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] uppercase'>Mint NFT</h2>
                            <div className='mt-[51px] flex justify-between w-full'>
                                <div className='flex flex-col'>
                                    <p className=' font-Montserrat font-black text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-9'>9999 </p>
                                    <p className=' font-Montserrat text-white font-normal text-xs sm:text-base mt-2 sm:mt-[14px]'>of 10,000 minted</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className=' font-Montserrat font-black text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-9'>.2 ETH </p>
                                    <p className=' font-Montserrat text-white font-normal text-xs sm:text-base mt-2 sm:mt-[14px]'>per NFT</p>
                                </div>
                            </div>
                            <div className='mt-[31px] flex justify-between w-full'>
                                <div className='flex flex-col'>
                                    <p className=' font-Montserrat font-black text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-9'>Max 9 </p>
                                    <p className=' font-Montserrat text-white font-normal text-xs sm:text-base mt-2 sm:mt-[14px]'>NFTs per transaction</p>
                                </div>
                                <div className='flex flex-col'>
                                    <p className=' font-Montserrat font-black text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-9'>Max 2</p>
                                    <p className=' font-Montserrat text-white font-normal text-xs sm:text-base mt-2 sm:mt-[14px]'>Transaction per wallet</p>
                                </div>
                            </div>
                            <div className="flex mt-12">
                                <button onClick={SubtractValue} className='text-black font-Montserrat font-black rounded bg-white py-[13px] px-[30px] text-4xl'>-</button>
                                <p className=' text-white bg-transparent rounded border border-white text-4xl font-Montserrat font-black ml-[14px] mr-[11px] max-w-80 w-full flex items-center justify-center'>0{value}</p>
                                <button onClick={AddValue} className='text-black font-Montserrat font-black rounded bg-white py-[13px] px-[30px] text-4xl'>+</button>
                            </div>
                            <div className="mt-[29px] w-full flex">
                                <CommonButton text="MINT NOW"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintNft
