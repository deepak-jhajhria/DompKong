"use client";
import { useState } from "react"
import { AddIcon, MinusIcon } from "./Icons";

const FaqSec = () => {
    const [open, setOpen] = useState(0);
    const toggleAccordion = (index) => {
        setOpen(open === index ? true : index);
    };
    const accordionData = [
        { id:1, title: "Arcu faucibus diam feugiat magna etiam.", content: "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh." },
        { title: "Fermentum tortor aenean.", content: "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh." },
        { title: "Dictum est amet sollicitudin.", content: "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh." },
        { title: "Sed vulputate mi faucibus.", content: "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh." },
        { title: "Commodo placerat ultricies.", content: "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh." },
        { title: "Nunc amet cursus morbi donec.", content: "Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh." },
    ];
    return (
        <div>
            <div className="container max-w-[896px] w-full mt-[141px]">
                <h2 className='text-white font-azo font-normal text-center leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] uppercase'>FAQs</h2>
                <div className="my-[55px]">
                    {accordionData.map((item, index) => (
                        <div className={` ${open === index[0] ? "max-h-24" : "max-h-"} bg-transparent border-b border-[#FDDA60] relative after:absolute after:w-full after:h-[2px] after:left-0 after:bottom-0 after:bg-[#FDDA60] after:blur-sm mt-[25px] `} key={item.title}>
                            <div onClick={() => toggleAccordion(index)} className={` ${open === index ? "mx-[15px]" : ""} cursor-pointer text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-[22px] font-Montserrat font-bold justify-between flex`}>
                                <div>{item.title}</div><div className=" flex items-center justify-center">{open === index ? (<MinusIcon />) : (<AddIcon />)}</div>
                            </div>
                            <div className={` overflow-hidden duration-300  text-white font-Montserrat font-normal text-xs xs:text-sm sm:text-base  ${open === index ? "max-h-24 mx-[15px] mb-5 sm:mb-7 lg:mb-[43px] mt-[6px] lg:mt-[10px]" : "max-h-0 mt-2 sm:mt-3"}`}>
                                {item.content}
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default FaqSec
