import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { IQuestion } from '../../Interface/IQuestion';
import QuestionComments from './QuestionComments';
import QuestionAnswers from './QuestionAnswers';
const ReactMarkdown = require('react-markdown');


interface Props {
  match: {
    params: {
      id: string
    }
  }
}

export interface GQLQuestion {
  getQuestion: IQuestion
}
interface Variables {
  _id: string
};


function Question(props: Props) {
  const getQuestion = gql`
  query getQuestion($_id: ID!){
    getQuestion(_id: $_id) { 
      _id, title, content, createdAt, 
      answers { _id, content, createdAt, comments { _id, content }  }, 
      comments { _id, content, createdAt  } 
    } 
  }`;
  return (
    <Query<GQLQuestion, Variables> query={getQuestion} variables={{ _id: props.match.params.id }}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading</div>;
        if (error) return <h1>ERROR</h1>;
        if (data) {
          let { _id, title, content, comments, answers } = data.getQuestion;
          return (
            <div className="container">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{title}</h3>
                  <div className="card-subtitle mb-2 text-muted">
                    <ReactMarkdown source={content} />
                  </div>
                  <QuestionComments comments={comments} questionId={_id} />
                </div>
              </div>
              <br />
              <QuestionAnswers answers={answers} questionId={_id} />
            </div>
          )
        }
      }}
    </Query>
  );
}

export default Question;
