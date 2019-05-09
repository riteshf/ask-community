import React from 'react';
import { IAnswer } from '../../Interface/IAnswer';


const Answer = (props: IAnswer) => (
    <div className="card-body">
    {props.content}
    </div>
)

export default Answer;
