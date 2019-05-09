import React from 'react';
import Comment from './Comment';
import { IComment } from '../../Interface/IComment';

export interface IComments {
    comments: IComment[]
}


const Comments = (props: IComments) => (
    <div className="container">
        <hr style={{ marginBottom: '3px' }} />
        {
            props.comments.map(({ _id, content, createdAt }) => (
                <div key={_id}>
                    <Comment _id={_id} content={content} createdAt={createdAt} />
                    <hr style={{ marginBottom: '3px', marginTop: '3px' }} />
                </div>
            ))
        }
    </div>
);

export default Comments;
