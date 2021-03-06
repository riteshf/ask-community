import React from 'react';
import { IAnswer } from '../../Interface/IAnswer';
import Answers from '../Answer/Answers';
import AnswerQuestion from '../Answer/AnswerQuestion';


interface IAnswers {
    answers: IAnswer[];
    questionId: string;
}

function QuestionAnswers(props: IAnswers) {
    const [answers, addAnswer] = React.useState(props.answers);
    const addNewAnswer = (answer: string) => {
        /* Mutation Call TODO */
        let newAnswer = {
            _id: Math.random().toString(),
            content: answer,
            comments: [],
            createdAt: 'now',
        };
        addAnswer([...answers, newAnswer]);
    }

    return (
        <div className="QuestionAnswers">
            {answers && answers.length > 0 && <Answers answers={answers} />}
            <br />
            <AnswerQuestion addNewAnswer={addNewAnswer} initialView={"write"} questionId={props.questionId} />
        </div >
    );
}

export default QuestionAnswers;
