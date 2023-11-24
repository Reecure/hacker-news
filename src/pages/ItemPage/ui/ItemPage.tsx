import {FC} from "react";
import {ScreenCenter} from "@/widgets";
import {Comments, ItemBottomInfo, Loader} from "@/shared/ui";
import parse from "html-react-parser";
import {useNavigate, useParams} from "react-router-dom";
import {useGetItemQuery} from "@/features/getNews/model/services/getNewsItem.ts";
import {Story} from "@/enteties";
import Button, {ButtonThemes} from "@/shared/ui/Button/Button.tsx";

interface Props {
}
const ItemPage: FC<Props> = () => {
    const params = useParams();
    const {data, isLoading, refetch, isFetching} = useGetItemQuery(`${params.id}` || "");
    const  navigate = useNavigate();

    if (isLoading) {
        return <ScreenCenter><Loader /></ScreenCenter>;
    }
    if (data === undefined ) {
        return <div>Item doesnt exist</div>;
    }

    return (
        <div className={'text-black'}>
            <Button theme={ButtonThemes.DEFAULT} onClick={() => navigate(-1)}>Back</Button>
            <h2 className={'text-3xl font-bold mb-5'}>{data?.title}</h2>
            <div>{data?.text && parse(data?.text)}</div>
            <a href={data?.url} target={'_blank'}>{data?.url}</a>
            <ItemBottomInfo by={data?.by} time={data?.time} />

            <h3 className={'text-xl font-bold my-4'}>Comments</h3>
            <Button className={'mb-5'} theme={ButtonThemes.DEFAULT} onClick={() => refetch()} disabled={isFetching}>{isFetching ? 'Loading' : 'Refetch'}</Button>

            <Comments data={data as Story} />
        </div>
    );
};

export default ItemPage;