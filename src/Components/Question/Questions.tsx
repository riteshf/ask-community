import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IQuestions } from '../../Interface/IQuestion';

interface Props {
    searchString: string;
}

const getQuestions = gql`{ 
  getQuestions { _id, title, createdAt, answers { _id, createdAt }, comments { _id, createdAt } } 
}`;

const Questions = (props: Props) => (
    <Query<IQuestions, {}> query={getQuestions}>
        {({ loading, error, data }) => {
            if (loading) return <div>Loading</div>;
            if (error) return <h1>ERROR</h1>;
            if (data) return (
                <Table responsive>
                    <thead>
                        <tr>
                            <th style={{ width: '10%', textAlign: 'center' }}>Star</th>
                            <th style={{ width: '10%', textAlign: 'center' }}>Answer</th>
                            <th style={{ width: '80%' }}>Question</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.getQuestions.map(({ _id, title, lastUpdatedAt, createdAt, answers, comments }) => (
                            <tr key={_id}>
                                <td style={{ textAlign: 'center' }}>
                                    <h2><b>{comments.length}</b></h2>
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <h2><b>{answers.length}</b></h2>
                                </td>
                                <td>
                                    <div className="row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                        <div className="col-md-8">
                                            <h4>
                                                <Link to={'/question/' + _id} style={{ textDecoration: 'none' }}>
                                                    {title}
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="col-md-3 form-group">
                                            <h6>{'Created on: ' + new Intl.DateTimeFormat('en-US').format(new Date(createdAt)).toString()}</h6>
                                            {lastUpdatedAt && (<h6>{'Last Updated on: ' + new Intl.DateTimeFormat('en-US').format(new Date(lastUpdatedAt)).toString()}</h6>)}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </Table>
            )
        }}
    </Query>
);

export default Questions;
