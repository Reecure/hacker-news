import {FC, useState} from "react";
import {Link} from "react-router-dom";
import {Pages} from "@/shared/config/routeConfig/routeConfig.tsx";

interface Props {
}

const Navbar: FC<Props> = () => {

    const [sideNavOpen, setSideNavOpen] = useState(false);

    const sideBarOpenHandler = () => {
        setSideNavOpen(prev => !prev);
    };

    const pageValues = Object.values(Pages)?.map(item => (
        <Link to={`/${item}`} key={item}>{item}</Link>
    ));


    return (
        <nav className={'flex items-center justify-between md:justify-start text-xl gap-5 bg-custom-gray-900 px-2 sm:px-10 xl:px-20 py-5 '}>
            <Link to={'/'} className={'font-bold text-green-400 whitespace-nowrap'}>Hacker news</Link>
            <div className={"hidden md:flex gap-5"}>
                {pageValues}
            </div>

            <div onClick={sideBarOpenHandler} className={'flex flex-col gap-2 cursor-pointer md:hidden'}>
                <div className={'h-[1px] rounded-md w-7 bg-custom-gray-400'}></div>
                <div className={'h-[1px] rounded-md w-7 bg-custom-gray-400'}></div>
                <div className={'h-[1px] rounded-md w-7 bg-custom-gray-400'}></div>
            </div>

            {
                sideNavOpen && (
                    <div>
                        <div className={'fixed top-0 right-0 w-[50%] sm:w-[40%] md:hidden h-screen bg-custom-gray-200 flex flex-col gap-5 text-black z-10 p-10'}>
                            {pageValues}
                        </div>
                        <div onClick={sideBarOpenHandler} className={'fixed top-0 left-0 bottom-0 right-0 bg-gray-900/50 md:hidden'}>
                        </div>
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;