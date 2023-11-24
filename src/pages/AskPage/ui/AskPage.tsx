import {useGetAskNewsQuery} from "@/features/getNews/model/services/getAllNews.ts";
import {ScreenCenter} from "@/widgets";
import {Loader, Pagination} from "@/shared/ui";

const AskPage = () => {
    const {data, isLoading} = useGetAskNewsQuery("");

    if (isLoading) {
        return <ScreenCenter><Loader /></ScreenCenter>;
    }

    return (
        <Pagination data={data} />
    );
};

export default AskPage;
