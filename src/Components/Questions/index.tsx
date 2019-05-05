import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
  searchString: string;
}

function Questions(props: Props) {
  let questions = [
    { id: 1, star: 1, answer: 1, question: 'Question 1 is as follows', },
    { id: 2, star: 2, answer: 2, question: 'Question 2 is as follows', },
    { id: 3, star: 3, answer: 3, question: 'Question 3 is as follows', },
    { id: 4, star: 4, answer: 4, question: 'Question 4 is as follows', },
    { id: 5, star: 5, answer: 5, question: 'Question 5 is as follows', },
    { id: 6, star: 6, answer: 6, question: 'Question 6 is as follows', },
    { id: 7, star: 7, answer: 7, question: 'Question 7 is as follows', },
    { id: 8, star: 8, answer: 8, question: 'Question 8 is as follows', },
    { id: 9, star: 9, answer: 9, question: 'Question 9 is as follows', },
    { id: 10, star: 10, answer: 10, question: 'Question 10 is as follows', },
    { id: 11, star: 11, answer: 11, question: 'Question 11 is as follows', },
    { id: 12, star: 12, answer: 12, question: 'Question 12 is as follows', },
    { id: 13, star: 13, answer: 13, question: 'Question 13 is as follows', },
    { id: 14, star: 14, answer: 14, question: 'Question 14 is as follows', },
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
            <th style={{ width: '10%', textAlign: 'center' }}>Star</th>
            <th style={{ width: '10%', textAlign: 'center' }}>Answer</th>
            <th style={{ width: '80%' }}>Question</th>
          </tr>
        </thead>
        <tbody>
          {questions.map(row => (
            <tr key={row.question}>
              <td style={{ textAlign: 'center' }}>
                <h2><b>{row.star}</b></h2>
              </td>
              <td style={{ textAlign: 'center' }}>
                <h2><b>{row.answer}</b></h2>
              </td>
              <td>
                <h4>
                  <Link to={'/question/' + row.id} style={{ textDecoration: 'none' }}>
                    {row.question}
                  </Link></h4>
              </td>
            </tr>
          ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Questions;
