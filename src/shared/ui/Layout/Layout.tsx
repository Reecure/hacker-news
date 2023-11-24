import {FC} from "react";
import {Outlet} from "react-router-dom";
import {Navbar} from "@/widgets";


interface Props {
}

const Layout: FC<Props> = () => {
    return (
        <>
            <Navbar />
            <main className={'max-w-view mx-auto py-10 px-2 sm:px-10 md:px-16 lg:px-20 xl:px-40'}>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;