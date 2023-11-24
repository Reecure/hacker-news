import {useGetTopNewsQuery} from "@/features/getNews/model/services/getAllNews.ts";
import {ScreenCenter} from "@/widgets";
import {Loader, Pagination} from "@/shared/ui";
import Button, {ButtonThemes} from "@/shared/ui/Button/Button.tsx";
const MainPage = () => {

    const {data, isLoading, isFetching, refetch} = useGetTopNewsQuery("", {
        refetchOnMountOrArgChange: true,
        pollingInterval: 20000
    });

    if (isLoading) {
        return <ScreenCenter><Loader /></ScreenCenter>;
    }

    return (
        <div className={'text-black'}>
            <Button className={"mb-5"} theme={ButtonThemes.DEFAULT} onClick={() => refetch()} disabled={isFetching}>{isFetching ? 'Loading' : 'Refetch'}</Button>
            <Pagination data={data} />
        </div>

    );
};

export default MainPage;
