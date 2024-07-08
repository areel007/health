type TServicesCard = {
    img: string;
    serviceName: string;
    desc: string;

}

import "./Services.Card.css"

export const ServicesCard = ({ serviceName, desc, img }: TServicesCard) => {
    return <div className="w-full h-[270px] bg-gray-200 overflow-hidden relative p-[10px] md:p-[20px] cursor-pointer group rounded-[10px] card">
        <img src={img} alt="pain doc africa" className="absolute inset-0 w-full" />
        <div className="relative z-[2] h-full flex flex-col justify-between">
            <span className="text-white font-semibold text-[13px] md:text-[16px] leading-[1.4]">{serviceName}</span>
            <p className="text-white text-[12px] md:text-[14px] hidden group-hover:block">{desc}</p>
        </div>
    </div>
}