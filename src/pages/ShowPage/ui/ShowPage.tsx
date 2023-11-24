import { useGetShowNewsQuery} from "@/features/getNews/model/services/getAllNews.ts";
import {ScreenCenter} from "@/widgets";
import {Loader, Pagination} from "@/shared/ui";

const ShowPage = () => {
    const {data, isLoading} = useGetShowNewsQuery("");

    if (isLoading) {
        return <ScreenCenter><Loader /></ScreenCenter>;
    }

    return (
        <Pagination data={data} />
    );
};

export default ShowPage;
