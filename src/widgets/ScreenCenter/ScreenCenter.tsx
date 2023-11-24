import {FC, ReactNode} from "react";

interface Props {
    children: ReactNode
}

const ScreenCenter: FC<Props> = ({children}) => {

    return (
        <div className={'h-screen w-screen flex justify-center items-center'}>
            {children}
        </div>
    );
};

export default ScreenCenter;