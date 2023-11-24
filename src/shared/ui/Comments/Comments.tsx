import {FC} from "react";
import Comment from "@/shared/ui/Comments/Comment/Comment.tsx";

import {IComment, Story} from "@/enteties";

interface Props {
    data: Story | IComment
}



const Comments: FC<Props> = ({data}) => {

    return (
        <ul className={''}>
            {data.kids && data?.kids.map((item, index) => (
                <Comment key={index} id={item} />
            ))}
        </ul>
    );
};

export default Comments;