import {FC} from "react";

interface Props {
}

const Skeleton: FC<Props> = () => {
    return (
        <div className="animate-pulse h-10 bg-custom-gray-400 rounded-md"></div>
    );
};

export default Skeleton;