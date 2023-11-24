import {FC} from "react";
import {formatDate} from "@/shared/helpers/formatDate.ts";

interface Props {
   by: string,
    time: number
}

const ItemBottomInfo: FC<Props> = ({time, by}) => {

    return (
        <div className={'flex gap-2 text-xs text-gray-500 font-bold'}>
            <p>by {by}</p> <p>{formatDate(time)}</p>
        </div>
    );
};

export default ItemBottomInfo;