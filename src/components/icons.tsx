import { SVGAttributes } from "react"

interface IIcon extends SVGAttributes<SVGAElement> {
    customStyle: string;
    handleToggleMobileMenu: () => void;
}

interface IIconNoAction extends SVGAttributes<SVGAElement> {
    customStyle: string;
}

export const Play = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="fill-white h-[16px] w-[16px]"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" /></svg>
}

export const ChevronDown = ({ customStyle }: IIconNoAction) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-[16px] h-[16px] ${customStyle}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
}

export const Hamburger = ({ customStyle, handleToggleMobileMenu }: IIcon) => {
    return <svg onClick={handleToggleMobileMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={customStyle}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>

}

export const Close = ({ customStyle, handleToggleMobileMenu }: IIcon) => {
    return <svg onClick={handleToggleMobileMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={customStyle}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>

}