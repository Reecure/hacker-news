import {FC, useState} from "react";
import {useGetICommentItemQuery} from "@/features/getNews/model/services/getNewsItem.ts";
import Comments from "@/shared/ui/Comments/Comments.tsx";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";
import {ItemBottomInfo} from "@/shared/ui";
import parse from "html-react-parser";
import {IComment} from "@/enteties";
import Button, {ButtonThemes} from "@/shared/ui/Button/Button.tsx";

interface Props {
    id: number;
}

const Comment: FC<Props> = ({ id }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const { data, isLoading } = useGetICommentItemQuery(`${id}`);

    if (isLoading) {
        return <Skeleton />;
    }

    const listStyle = 'ml-5 text-black p-2 rounded-md border-[1px] border-b-2 border-black text-sm';

    const commentBody = (comment: IComment) => (
        <div>
            <div className={'mb-2'}>
                {comment?.text?.length > 0 ? parse(comment.text) : '' }
            </div>
            <ItemBottomInfo by={comment?.by} time={comment?.time} />
        </div>
    );

    if (data === undefined) {
        return null;
    }

    if (data?.kids && data?.kids.length > 0) {
        return (
            <>
                {
                    <li className={`mb-2  ${listStyle}`}>
                        {commentBody(data)}
                        {showAnswer && (<Comments data={data as IComment}/>)}
                        <div className={'flex justify-end'}>
                            <Button theme={ButtonThemes.DEFAULT}
                                onClick={() => setShowAnswer(prev => !prev)}>
                                {showAnswer ? 'Hide': 'More'}
                            </Button>
                        </div>
                    </li>
                }
            </>
        );
    } else {
        return <li className={`my-2 ${listStyle}`}>
            {commentBody(data as IComment)}
        </li>;
    }
};

export default Comment;
