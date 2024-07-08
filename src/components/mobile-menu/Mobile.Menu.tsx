import { ChevronDown } from "../icons";
import { useLocation } from "react-router-dom";

type TLink = {
    name: string;
    url: string;
}

type TLinks = {
    links: {
        name: string;
        url: string;
        submenu?: {
            name: string;
            url: string;
        }[]
    }[],
    isMobileMenuOut: boolean;
    step: number;
    handleChooseStep: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, submenu: TLink[] | undefined) => void;
    submenu: TLink[] | undefined;
    handleCloseMobileMenu: () => void;
}

export const MobileMenu = ({ links, isMobileMenuOut, step, handleChooseStep, submenu, handleCloseMobileMenu }: TLinks) => {

    const location = useLocation()

    return <div className={`fixed w-full bg-white py-[20px] top-[61px] z-[13] shadow ${isMobileMenuOut ? 'block' : 'hidden'}`}>
        {step === 0 ? <div className="w-[90%] mx-auto flex flex-col gap-[10px]">
            {links.map(_link => _link.submenu ? <div onClick={(e) => handleChooseStep(e, _link.submenu)} className="flex items-center font-[300] capitalize text-[14px]" key={_link.name}>
                <span>
                    {_link.name}
                </span>
                <ChevronDown customStyle="text-black" />
            </div> : <a href={_link.url === location.pathname ? '#' : _link.url} key={_link.name} className={`font-[300] capitalize text-[14px] ${_link.url === location.pathname ? "text-[#0a56b6] font-[600]" : "text-[#000]"}`}>{_link.name}</a>)}
            <a onClick={() => handleCloseMobileMenu} href={`${location.pathname === "/contacts" ? "#" : "/contacts"}`} className="p-[10px_20px] bg-[#0a56b6] rounded text-white text-center w-[min-content] whitespace-nowrap">
                Make an Enquiry
            </a>

        </div> : <div className="w-[90%] mx-auto flex flex-col gap-[10px]">
            {submenu?.map(_submenu => <a key={_submenu.name} href={_submenu.url} className="font-[300] capitalize text-[14px]">{_submenu.name}</a>)}
        </div>}
    </div>
}