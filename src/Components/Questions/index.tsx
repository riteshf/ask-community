import React from 'react';
import { Table } from 'react-bootstrap';

interface Props {
  searchString: string;
}

function Questions(props: Props) {
  let data = [
    { stars: 1, answers: 1, question: 'Question 1 is as follows' },
    { stars: 2, answers: 2, question: 'Question 2 is as follows' },
    { stars: 3, answers: 3, question: 'Question 3 is as follows' },
    { stars: 4, answers: 4, question: 'Question 4 is as follows' },
    { stars: 5, answers: 5, question: 'Question 5 is as follows' },
    { stars: 6, answers: 6, question: 'Question 6 is as follows' },
    { stars: 7, answers: 7, question: 'Question 7 is as follows' },
    { stars: 8, answers: 8, question: 'Question 8 is as follows' },
    { stars: 9, answers: 9, question: 'Question 9 is as follows' },
    { stars: 10, answers: 10, question: 'Question 10 is as follows' },
    { stars: 11, answers: 11, question: 'Question 11 is as follows' },
    { stars: 12, answers: 12, question: 'Question 12 is as follows' },
    { stars: 13, answers: 13, question: 'Question 13 is as follows' },
    { stars: 14, answers: 14, question: 'Question 14 is as follows' },
  ]
  if (props.searchString) {
    // search questions matching given string
  } else {
    //search for all questions, try limitting to 20-30.
  }
  return (
    <div className="Questions">
      <Table responsive>
        <thead>
          <tr>
            <th style={{ width: '10%', textAlign: 'center' }}>Stars</th>
            <th style={{ width: '10%', textAlign: 'center' }}>Answers</th>
            <th style={{ width: '80%' }}>Question</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr>
              <td style={{ textAlign: 'center' }}>
                <h2><b>{row.stars}</b></h2>
              </td>
              <td style={{ textAlign: 'center' }}>
                <h2><b>{row.answers}</b></h2>
              </td>
              <td>
                <h4><a href="">{row.question}</a></h4>
              </td>
            </tr>))
          }


        </tbody>
      </Table>
    </div>
  );
}

export default Questions;
