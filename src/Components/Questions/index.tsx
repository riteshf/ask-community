import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import QuestionsTable from './QuestionsTable';
interface Props {
  searchString: string;
}

const getQuestions = gql`{ 
  getQuestions { _id, title, createdAt, answers { _id, createdAt }, comments { _id, createdAt } } 
}`;

interface IQuestion {
  getQuestions: [{
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
  }]
}


interface Variables {
};


function Questions(props: Props) {

  return (
    <Query<IQuestion, Variables> query={getQuestions}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading</div>;
        if (error) return <h1>ERROR</h1>;
        if (data) return <QuestionsTable data={data && data.getQuestions} />
      }}
    </Query>
  );
}

export default Questions;
