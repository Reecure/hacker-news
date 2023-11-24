import {FC} from "react";
import {Link} from "react-router-dom";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";
import {ItemBottomInfo} from "@/shared/ui";
import {useGetItemQuery} from "@/features/getNews/model/services/getNewsItem.ts";

interface Props {
    id: number
}

const NewsLink: FC<Props> = ({id}) => {
    const {data , isLoading,} = useGetItemQuery(`${id}`);

    if (isLoading) {
        return <Skeleton />;
    }

    if (data === undefined) {
        return null;
    }

    return (
        <>
            <div className={'flex flex-col gap-3  border-[1px] border-b-2 border-gray-900 text-black font-bold px-2 py-1 rounded-md '}>
                <div className={'flex gap-3 items-center'}>
                    <div className={'w-12 flex justify-center text-xs border-r-2 border-black'}>
                        {data?.score < 10000 ? data?.score : '9999+'}
                    </div>
                    <div className={`w-full truncate`}>
                        <Link to={`/item/${id}`} className={`truncate`}>{data?.title}</Link>
                        <ItemBottomInfo by={data.by} time={data.time} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsLink;