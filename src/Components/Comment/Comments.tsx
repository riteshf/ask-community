import React from 'react';
import Comment from './Comment';
import { IComment } from '../../Interface/IComment';

export interface IComments {
    comments: IComment[]
}


const Comments = (props: IComments) => (
    <div className="card">
        {
            props.comments.map(({ _id, content, createdAt }) => (
                <div key={_id}>
                    <Comment _id={_id} content={content} createdAt={createdAt} />
                </div>
            ))
        }
    </div>
);

export default Comments;
