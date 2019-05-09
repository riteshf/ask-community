import React from 'react';

import ReactMde from "react-mde";
import Showdown from "showdown";
import { IComment } from '../../Interface/IComment';



const Comment = (props: IComment) => {

    let [comment, setComment] = React.useState(props.content);
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
                    onChange={setComment}
                    value={comment}
                    generateMarkdownPreview={markdown =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }
                />
            </div>
        </div>
    )
};

export default Comment;
