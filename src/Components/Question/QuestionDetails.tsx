import React from 'react';

interface Props {
  questionRow: {
    question: string,
    star: number,
    answer: number,
  };
}

function QuestionDetails(props: Props) {
  return (
    <div className="QuestionRow">
      <tr key={props.questionRow.question}>
        <td style={{ textAlign: 'center' }}>
          <h2><b>{props.questionRow.star}</b></h2>
        </td>
        <td style={{ textAlign: 'center' }}>
          <h2><b>{props.questionRow.answer}</b></h2>
        </td>
        <td>
          <h4><a href="">{props.questionRow.question}</a></h4>
        </td>
      </tr>
    </div >
  );
}

export default QuestionDetails;
