import { Link, useLocation } from "react-router-dom";

type TLinkProps = {
    name: string;
    url: string;
    submenu?: {
        name: string;
        url: string;
    }[]
}

type TLinksProps = {
    links: TLinkProps[]
}

export const Links = ({ links }: TLinksProps) => {
    const location = useLocation();

    console.log(location.pathname);

    return (
        <nav className="hidden xl:flex items-center gap-[20px] h-full">
            {links.map((link, index) =>
                link.submenu ? (
                    <div className="h-full relative" key={index}>
                        <div className="group h-full flex items-center">
                            <div className={`flex items-center cursor-pointer ${location.pathname === link.url ? 'text-[#0a56b6]' : ''}`}>
                                <Link to={link.url}
                                    className={`capitalize font-[300]`}
                                >
                                    {link.name}
                                </Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </div>

                            <div className="absolute left-0 top-[101%] min-w-[250px] p-[20px] bg-white w-full hidden group-hover:flex gap-[40px] shadow">
                                {link.submenu.map((_submenu, subIndex) => (
                                    <a href={_submenu.url} key={subIndex} className="capitalize font-[300] hover:underline block">
                                        {_submenu.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <a href={link.url === location.pathname ? '#' : link.url} key={index} className={`capitalize font-[300] ${location.pathname === link.url ? 'text-[#0a56b6]' : ''}`}>
                        {link.name}
                    </a>
                )
            )}
        </nav>
    );
};
