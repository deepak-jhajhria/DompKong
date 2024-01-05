import { BriefCaseIcon, ContractIcon, FileIcon } from "./Icons";
const Utilities = () => {
    const items = [
        {
            logo: (<FileIcon />),
            title:"Document",
            para:"Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. "
        },
        {
            logo: (<BriefCaseIcon />),
            title:"Deal",
            para:"Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. "
        },
        {
            logo: (<ContractIcon />),
            title:"Contract",
            para:"Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus. "
        },
    ];
    const ItemsComponents = items.map((items)=>(
        <div data-aos="flip-left" data-aos-duration="2000" key={items.title} className="w-full border border-[#4E4E4E] hover:border-white group rounded-2xl bg-[#222222] duration-300 hover:bg-[#FDDA60] backdrop-blur-lg relative overflow-hidden hover:shadow-[0_14px_56px_0_rgba(253,218,96,0.50)]">
            <div  className="flex flex-col items-center justify-center py-[25px] px-5 gap-4 md:gap-2 lg:gap-4">
                <span data-aos="fade-down" data-aos-duration="1000" >{items.logo}</span>
                <p data-aos="fade-right" data-aos-duration="1000" className=" font-Montserrat font-semibold text-white group-hover:text-black duration-300 text-xl sm:text-2xl text-center">{items.title}</p>
                <p data-aos="fade-left" data-aos-duration="1000" className=" font-Montserrat font-normal text-white group-hover:text-black duration-300 text-sm sm:text-base text-center">{items.para}</p>
            </div>
            <span className="flex w-[91px] group-hover:hidden h-[91px] rounded-full bg-white absolute bottom-0 left-0 blur-[64px] -translate-x-8 translate-y-7 -z-10"></span>
            <span className="flex w-[91px] group-hover:hidden h-[91px] rounded-full bg-white absolute top-0 right-0 blur-[64px] translate-x-8 -translate-y-7 -z-10"></span>
        </div>
    ))
    return (
        <div className=" overflow-hidden">
            <div className="container max-w-[1140px] mt-[40px] pb-6 xs:pb-10 sm:pb-14 md:pb-[100px] lg:pb-[113px]">
                <h2 data-aos="fade-right" data-aos-duration="2000" className="text-white font-azo font-normal text-center leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] uppercase">Utilities</h2>
                <div className="grid  md:grid-cols-3 gap-4 md:gap-3 xl:gap-4 mt-6 sm:mt-9 lg:mt-[44px] mb-2">
                    {ItemsComponents}
                </div>
            </div>
        </div>
    );
};

export default Utilities;