import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import QuestionsTable from './QuestionsTable';
interface Props {
  searchString: string;
}

const getQuestions = gql`{ 
  questions { title, answers { content, comments { content } }, comments { content } } 
}`;

interface IQuestion {
  questions: [{ star: number, answers: [], title: string, }]
}


interface Variables {
};


function Questions(props: Props) {

  return (
    <Query<IQuestion, Variables> query={getQuestions}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading</div>;
        if (error) return <h1>ERROR</h1>;
        if (data) return <QuestionsTable data={data && data.questions} />
      }}
    </Query>
  );
}

export default Questions;
