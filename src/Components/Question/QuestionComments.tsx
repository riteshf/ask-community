import React from 'react';
import Comments from '../Comment/Comments';
import CommentQuestion from '../Comment/CommentQuestion';
import { IComment } from '../../Interface/IComment';


interface IComments {
    questionId: string;
    comments: IComment[]
}

function QuestionComments(props: IComments) {
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
        <div className="QuestionComments">
            <Comments comments={comments} />
            <CommentQuestion setNewComment={setNewComment} />
        </div >
    );
}

export default QuestionComments;
