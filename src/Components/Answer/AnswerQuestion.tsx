import React from 'react';
import ReactMde from "react-mde";
import Showdown from "showdown";
import gql from 'graphql-tag';
import { Mutation, graphql } from 'react-apollo';
import { IComment } from '../../Interface/IComment';


export interface Props {
    addNewAnswer: Function;
    initialView: "write" | "preview";
    questionId: string;
}

interface Data {
    answerQuestion: IComment
  }

  
const AnswerQuestion = (props: Props) => {

    const [answer, setAnswer] = React.useState('');

    const sumbitAnswer = gql`{
        mutation answerQuestion( questionId: $questionId, content: $content ) {
            _id content createdAt 
        }
    }`;

    const [view, setView] = React.useState(props.initialView);
    let converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true,
    });

    const submitAnswer = () => {
        props.addNewAnswer(answer);
        setAnswer('');
    }

    return (
        <Mutation<Data, {questionId: string, content: string}> mutation={sumbitAnswer}>
            {(answerQuestion, { data }) => (
                <div className="card">
                    <h2 style={{ textAlign: 'center' }}><b>Your Answer</b></h2>
                    <div className="card-body">
                        <ReactMde
                            value={answer}
                            onChange={answer => setAnswer(answer)}
                            onTabChange={(tab: "write" | "preview") => setView(tab)}
                            selectedTab={view}
                            generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
                        />
                        <br />
                        <input className="offset-md-10 btn btn-primary"
                            onClick={() => {
                                answerQuestion();
                                setAnswer('');
                            }}
                        >Submit Answer </input>
                    </div>
                </div>
            )}
        </Mutation>
    )
};

export default AnswerQuestion;
