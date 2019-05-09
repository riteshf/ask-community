import React from 'react';
import ReactMde from "react-mde";
import Showdown from "showdown";
export interface Props {
    _id: string,
    content: string,
}


const AnswerQuestion = (props: Props) => {

    let [answer, setAnswer] = React.useState(props.content);
    let converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    });
    return (
        <div className="card-body" key={props.content}>
            <div className="container">
                <ReactMde
                    onChange={setAnswer}
                    value={answer}
                    generateMarkdownPreview={markdown =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }
                />
            </div>
        </div>
    )
};

export default AnswerQuestion;
