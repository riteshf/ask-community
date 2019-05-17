import React from 'react';
import ReactMde from "react-mde";
import Showdown from "showdown";
export interface Props {
    addNewAnswer: Function;
    initialView: "write" | "preview";
}


const AnswerQuestion = (props: Props) => {

    const [answer, setAnswer] = React.useState('');
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
        <div>
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
                    <button className="offset-md-10 btn btn-primary" onClick={submitAnswer}>Submit Answer</button>
                </div>
            </div>
        </div>
    )
};

export default AnswerQuestion;
