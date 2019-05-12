import React from 'react';
import { FormControl } from 'react-bootstrap';


interface IComment {
    setNewComment: Function
}


const CommentAnswer = (props: IComment) => {
    const [comment, setComment] = React.useState('');

    const submitComment = (e: React.KeyboardEvent<FormControl>) => {
        if (e.key === 'Enter') {
            props.setNewComment(comment);
            setComment('');
        }
    }
    return (
        <div className="container">
            <input className="col-md-12 form-control" type="text" placeholder="Press Enter to submit comment ..."
                value={comment} onChange={(e) => setComment(e.target.value)} onKeyDown={(e: React.KeyboardEvent<any>) => submitComment(e)}
            ></input>
        </div>
    )
}

export default CommentAnswer;
