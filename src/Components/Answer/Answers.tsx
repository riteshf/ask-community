import React from 'react';
import Answer from './Answer';
import { IAnswer } from '../../Interface/IAnswer';

export interface Props {
    answers: IAnswer[],
}


const Answers = (props: Props) => (
    <div className="card-body">
    </div>
)

export default Answers;
