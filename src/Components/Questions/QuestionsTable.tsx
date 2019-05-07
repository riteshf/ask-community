import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
    data: [
        {
            _id: string,
            createdAt: string,
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
                {data.map(({ _id, title, createdAt, answers, comments }) => (
                    <tr key={_id}>
                        <td style={{ textAlign: 'center' }}>
                            <h2><b>{comments.length}</b></h2>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                            <h2><b>{answers.length}</b></h2>
                        </td>
                        <td>
                            <div>
                            <h4>
                                <Link to={'/question/' + _id} style={{ textDecoration: 'none' }}>
                                    {title}
                                </Link>
                            </h4>
                            <div className='user pull right'>
                            <h6>{new Date(createdAt).toString()}</h6>
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
