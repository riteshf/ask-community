import React from 'react';

import { IComment } from '../../Interface/IComment';



const Comment = (props: IComment) => (
    <React.Fragment>
        {props.content}
    </React.Fragment>
);

export default Comment;
