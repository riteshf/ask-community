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

    return (
        <div>
            <h2><b>Your Answer</b></h2>
            <div className="card">
                <div className="card-body">
                    <ReactMde
                        value={answer}
                        onChange={answer => setAnswer(answer)}
                        onTabChange={(tab: "write" | "preview") => setView(tab)}
                        selectedTab={view}
                        generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
                    />
                </div>
            </div>
        </div>
    )
};

export default AnswerQuestion;
