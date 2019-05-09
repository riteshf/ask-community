import React from 'react';
import Answer from './Answer';
import { IAnswer } from '../../Interface/IAnswer';

export interface Props {
    answers: IAnswer[],
}


const Answers = ({ answers }: Props) => (
    <div className="card-body">
        {answers && answers.length > 0 && answers.map(({ _id, content, createdAt, comments }) => (
            <React.Fragment key={_id}>
                <Answer
                    _id={_id}
                    content={content}
                    createdAt={createdAt}
                    comments={comments}
                />
            </React.Fragment>
        )
        )}
    </div>
)

export default Answers;
