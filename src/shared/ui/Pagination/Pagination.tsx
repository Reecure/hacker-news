import {FC, useEffect, useState} from "react";
import NewsLink from "@/shared/ui/NewsLink/NewsLink.tsx";

interface Props {
    data: number[]
}

const LIMIT = 20;

const Pagination: FC<Props> = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const renderData = data
        .slice((currentPage - 1) * LIMIT, currentPage * LIMIT)
        .map((item) => (
            <NewsLink key={item} id={item} />
        ));
    const renderPages = (pages: number, curentPage: number, setPage: (val: number) => void,) => {
        if (pages === 1) {
            return null;
        } else if (pages < 5) {
            return (
                <>
                    {Array(pages)
                        .fill(null)
                        .map((_, i) => (
                            <li
                                key={i}
                                className={`${currentPage === i + 1 ? 'text-gray-600' : ' text-white'} w-7 h-7 flex items-center justify-center rounded-md bg-gray-900 cursor-pointer`}
                                onClick={() => setPage(i + 1 )}
                            >{i + 1}</li>
                        ))}
                </>
            );
        } else {
            let pagesArr = [];

            if (curentPage === 1) {
                pagesArr = [curentPage, curentPage + 1, curentPage + 2];
            } else if (curentPage + 1 === pages) {
                pagesArr = [curentPage - 2, curentPage - 1, curentPage];
            } else if (curentPage + 1 > pages) {
                pagesArr = [curentPage - 3, curentPage - 2, curentPage - 1, curentPage];
            } else if (curentPage >= 1) {
                pagesArr = [curentPage - 1, curentPage, curentPage + 1];
            } else pagesArr = [curentPage + 1, curentPage + 2, curentPage + 3];

            return (
                <>
                    {curentPage > 2 && <li className={`${currentPage === 1 ? 'text-gray-600' : ' text-white'} w-7 h-7 flex items-center justify-center rounded-md bg-gray-900 cursor-pointer`}  onClick={() => setPage(1)}>{1}</li>}
                    {pagesArr.map((page) => (
                        <li key={page} className={`${currentPage === page ? 'text-gray-600' : ' text-white'} w-7 h-7 flex items-center justify-center rounded-md bg-gray-900 cursor-pointer`}
                            onClick={() => setPage(page)}>{page}</li>
                    ))}
                    {curentPage < pages && (
                        <li className={`${currentPage === pages ? 'text-gray-600' : ' text-white'} w-7 h-7 flex items-center justify-center rounded-md bg-gray-900 cursor-pointer`}
                            onClick={() => setPage(pages)}>{pages}</li>
                    )}
                </>
            );
        }
    };

    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[currentPage]);

    return (
        <div>
            <div className={'flex flex-col gap-3'}>
                {renderData}
            </div>
            <ul className="flex items-center justify-center gap-2 mt-5">
                {renderPages(Math.ceil(data.length / LIMIT), currentPage, handleClick)}
            </ul>
        </div>
    );
};

export default Pagination;