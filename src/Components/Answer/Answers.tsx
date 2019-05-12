import React from 'react';
import Answer from './Answer';
import { IAnswer } from '../../Interface/IAnswer';

export interface Props {
    answers: IAnswer[],
}


const Answers = ({ answers }: Props) => (
    <div>
        <br />
        <h2><b>Answers</b></h2>
        {answers.map(({ _id, content, createdAt, comments }) => (
            <div key={_id}>
                <div className="card">
                    <Answer
                        _id={_id}
                        content={content}
                        createdAt={createdAt}
                        comments={comments}
                    />
                </div>
                <br />
            </div>
        )
        )}
    </div>
)

export default Answers;
