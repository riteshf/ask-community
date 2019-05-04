import React from 'react';
import { Table } from 'react-bootstrap';

interface Props {
  searchString: string;
}

function Questions(props: Props) {
  if(props.searchString){
    // search questions matching given string
  } else{
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
          <tr>
            <td style={{ textAlign: 'center' }}><h2><b>1</b></h2></td>
            <td style={{ textAlign: 'center' }}><h2><b>4</b></h2></td>
            <td><h4><a href="">Question 1</a></h4></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Questions;
