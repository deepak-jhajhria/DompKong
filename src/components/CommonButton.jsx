import React from 'react'

const CommonButton = (props) => {
  return (
    <div>
      <button className='text-black text-center text-base font-normal leading-[17.3px] uppercase bg-[#FDDA60] font-AzoSansUber rounded-[4px] py-2 xs:py-3 px-4 xs:px-5 sm:py-4 sm:px-6 shadow-[0_9px_29px_0_rgba(253,218,96,0.50)]'>{props.text}</button>
    </div>
  )
}

export default CommonButton
