import React from 'react';
import Comments from '../Comment/Comments';
import CommentAnswer from '../Comment/CommentAnswer';
import { IComment } from '../../Interface/IComment';


interface IComments {
    comments: IComment[]
}

function AnswerComments(props: IComments) {
    const [comments, addComments] = React.useState(props.comments);
    const setNewComment = (comment: string) => {
        /* Mutation Call TODO */
        let newComment =  {
            _id: Math.random().toString(),
            content: comment,
            createdAt: 'now',
        };
        addComments([...comments, newComment]);
    }

    return (
        <div className="AnswerComments">
            <Comments comments={comments} />
            <CommentAnswer setNewComment={setNewComment} />
        </div >
    );
}

export default AnswerComments;
