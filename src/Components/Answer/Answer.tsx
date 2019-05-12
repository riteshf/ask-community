import React from 'react';
import { IAnswer } from '../../Interface/IAnswer';
import AnswerComments from './AnswerComments';

const ReactMarkdown = require('react-markdown');

const Answer = (props: IAnswer) => {
    return (
        <div className="card-body">
            <ReactMarkdown source={props.content} />
            <AnswerComments comments={props.comments} />
        </div>
    )
};

export default Answer;
