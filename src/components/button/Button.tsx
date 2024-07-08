import { ReactNode, ButtonHTMLAttributes } from "react";

interface IBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    icon?: ReactNode;
    customStyles: string;
}


export const Btn = ({ text, icon, customStyles }: IBtn) => {
    return <button className={`flex items-center gap-[5px] w-[min-content] whitespace-nowrap ${customStyles}`}>
        <span className="font-[300] text-[14px] md:text-[16px]">{text}</span>
        {icon}
    </button>
}