type TSubmenu = {
    submenu: {
        name: string;
        url: string;
    }[]
}

export const Submenu = ({ submenu }: TSubmenu) => {
    return <div className="absolute top-full">
        <div className="p-[20px] shadow bg-white relative top-[48px] gap-[10px_40px] min-w-[650px] grid grid-cols-[auto_auto]">
            {submenu.map(_submenu => <a href={_submenu.url} key={_submenu.name} className="capitalize font-[300] leading-[1.4] text-zinc-700">{_submenu.name}</a>)}
        </div>
    </div>
}