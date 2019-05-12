import React from 'react';
import { IAnswer } from '../../Interface/IAnswer';
import Answers from '../Answer/Answers';
import AnswerQuestion from '../Answer/AnswerQuestion';


interface IAnswers {
    answers: IAnswer[]
}

function QuestionComments(props: IAnswers) {
    const [answers, addAnswer] = React.useState(props.answers);
    const addNewAnswer = (answer: string) => {
        /* Mutation Call TODO */
        let newAnswer =  {
            _id: Math.random().toString(),
            content: answer,
            comments: [],
            createdAt: 'now',
        };
        addAnswer([...answers, newAnswer]);
    }

    return (
        <div className="QuestionComments">
            <Answers answers={answers} />
            <AnswerQuestion addNewAnswer={addNewAnswer} initialView={"write"} />
        </div >
    );
}

export default QuestionComments;
