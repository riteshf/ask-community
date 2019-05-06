import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
    data: [
        {
            star: number,
            title: string,
            answers: [],
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
                {data.map(({ title, answers, star }) => (
                    <tr key={title}>
                        <td style={{ textAlign: 'center' }}>
                            <h2><b>{star}</b></h2>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                            <h2><b>{answers.length}</b></h2>
                        </td>
                        <td>
                            <h4>
                                <Link to={'/question/' + title} style={{ textDecoration: 'none' }}>
                                    {title}
                                </Link></h4>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </Table>
    )
}

export default QuestionsTable;
