import { ReactNode } from "react";

interface IConditionsCardProps {
    svg: ReactNode;
    title: string;
    description: string;
}

export const ConditionsCard = ({ svg, title, description }: IConditionsCardProps) => {
    return <div className="w-full min-h-[180px] bg-zinc-300 relative group cursor-pointer">
        <div className="absolute inset-0 z-[1] group-hover:z-[0] bg-white flex flex-col gap-[20px] items-center justify-center">
            {svg}
            <span className="text-center" dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        <div className="absolute inset-0 z-[0] group-hover:z-[1] group-hover:shadow-lg group-hover:rounded-lg bg-white p-[20px] text-[14px] md:text-[16px] flex justify-center items-center">{description}</div>
    </div>
}