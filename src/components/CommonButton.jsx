import React from 'react'

const CommonButton = (props) => {
  return (
    <>
      <button className='text-black text-center text-base font-normal w-full leading-[17.3px] uppercase bg-[#FDDA60] font-azo rounded-[4px] py-2 xs:py-3 px-4 xs:px-5 sm:py-4 sm:px-6 shadow-[0_9px_29px_0_rgba(253,218,96,0.50)]'>{props.text}</button>
    </>
  )
}

export default CommonButton
