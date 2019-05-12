import React from 'react';
import ReactMde from "react-mde";
import Showdown from "showdown";

import { IAnswer } from '../../Interface/IAnswer';
import AnswerComments from './AnswerComments';


const Answer = (props: IAnswer) => {

    let converter = new Showdown.Converter({
        tables: false,
        simplifiedAutoLink: false,
        strikethrough: false,
        tasklists: false,
    });

    return (
        <div className="card-body">
            <div className="container">
                <ReactMde
                    value={props.content}
                    selectedTab={"preview"}
                    generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
                />
            </div>
            <AnswerComments comments={props.comments} />
        </div>
    )
};

export default Answer;
