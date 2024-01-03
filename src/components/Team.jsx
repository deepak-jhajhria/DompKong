import Image from "next/image";
import Image1 from "../assets/image/jaylon1stMember.webp";
import Image2 from "../assets/image/jaylon2ndMember.webp";
import Image3 from "../assets/image/jaylon3rdMember.webp";
import { TeamInstaIcon, TeamTwitterIcon } from "./Icons";

const Team = () => {
    const items = [
        {
            Name:"Jaylon Schleifer",
            UserName:"@Jaylon Schleifer",
            work:"Carter Septimus",
            Image1:Image1,
            title:"Nearly two decades in Business",
            para1:"Faucibus risus id libero interdum in nisl nibh risus molestie. Gravida purus mauris nulla duis est eleifend. Suspendisse eu iaculis odio sit. Hac orci massa habitasse congue nulla tristique. ",
            para2:"Sem posuere amet, tristique pellentesque quis erat lectus mauris, ultricies. Adipiscing pharetra lectus mauris, mi pharetra magna in tempus nisi. Sed at in nisl feugiat non in amet eu facilisis. ",
            
        },
    ]

    const ItemsData = items.map((listing)=>(
        <div className="grid grid-cols-2">
            <div className="flex flex-col">
                <p className=" text-white font-Montserrat font-bold text-2xl">{listing.Name}</p>
                <p className=" text-white text-xl font-Montserrat font-normal">{listing.work}</p>
            </div>
        </div>
    ))
    return (
        <div className="container max-w-[1140px]">
            <h2 className="text-white font-azo font-normal text-center leading-8 md:leading-[69px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] uppercase">Meet The Team</h2>
                {ItemsData}
        </div>
    );
};

export default Team;