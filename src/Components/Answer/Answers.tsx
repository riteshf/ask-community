import React from 'react';
import Answer from './Answer';
import { IAnswer } from '../../Interface/IAnswer';

export interface Props {
    answers: IAnswer[],
}


const Answers = ({ answers }: Props) => (
    <div>
        <h2><b>Answers</b></h2>
        {answers && answers.length > 0 && answers.map(({ _id, content, createdAt, comments }) => (
            <div className="card" key={_id}>
                <Answer
                    _id={_id}
                    content={content}
                    createdAt={createdAt}
                    comments={comments}
                />
            </div>
        )
        )}
    </div>
)

export default Answers;
