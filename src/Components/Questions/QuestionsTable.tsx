import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
    data: [
        {
            _id: string,
            createdAt: string,
            lastUpdatedAt: string,
            title: string,
            answers: [{
                _id: string,
                createdAt: string,
            }],
            comments: [{
                _id: string,
                createdAt: string,
            }]
        }
    ]
}

const QuestionsTable = ({ data }: Props) => {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th style={{ width: '10%', textAlign: 'center' }}>Star</th>
                    <th style={{ width: '10%', textAlign: 'center' }}>Answer</th>
                    <th style={{ width: '80%' }}>Question</th>
                </tr>
            </thead>
            <tbody>
                {data.map(({ _id, title, lastUpdatedAt, createdAt, answers, comments }) => (
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
}

export default QuestionsTable;
