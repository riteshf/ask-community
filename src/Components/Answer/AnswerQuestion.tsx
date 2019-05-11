import React from 'react';
import ReactMde from "react-mde";
import Showdown from "showdown";
export interface Props {
    addNewAnswer: Function,

}


const AnswerQuestion = (props: Props) => {

    const [answer, setAnswer] = React.useState('');
    let converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    });
    return (
        <div className="card-body" key={answer}>
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
