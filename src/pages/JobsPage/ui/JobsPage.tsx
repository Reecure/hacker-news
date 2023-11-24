import {useGetJobsNewsQuery} from "@/features/getNews/model/services/getAllNews.ts";
import {ScreenCenter} from "@/widgets";
import {Loader, Pagination} from "@/shared/ui";

const JobsPage = () => {

    const {data, isLoading} = useGetJobsNewsQuery("");

    if (isLoading) {
        return <ScreenCenter><Loader/></ScreenCenter>;
    }

    return (
        <Pagination data={data} />
    );
};

export default JobsPage;
