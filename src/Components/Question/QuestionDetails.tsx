import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
interface Props {
  match: {
    params: {
      id: string
    }
  }
}

interface IQuestionDetails {
  getQuestion: {
    _id: string,
    title: string,
    content: string,
    createdAt: string,
    lastUpdatedAt: string,
    answers: [{
      _id: string,
      content: string,
      createdAt: string,
    }],
    comments: [{
      _id: string,
      content: string,
      createdAt: string,
    }]
  }
}


interface Variables {
  _id: string
};
function QuestionDetails(props: Props) {
  const getQuestion = gql`
  query getQuestion($_id: ID!){
    getQuestion(_id: $_id) { 
      title, content, createdAt, 
      answers { 
        _id, content, createdAt, 
        comments {
          _id, content
        } 
      }, 
      comments {
        _id, content, createdAt 
      } 
    } 
  }`;
  return (
    <Query<IQuestionDetails, Variables> query={getQuestion} variables={{ _id: props.match.params.id }}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading</div>;
        if (error) return <h1>ERROR</h1>;
        if (data) {
          let { title, content, comments, answers } = data.getQuestion
          return (
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <h4 className="card-subtitle mb-2 text-muted">{content}</h4>
                {comments.map(comment => (
                  <p className="card-text offset-1" key={comment.content}>{comment.content}</p>
                ))}

              </div>
            </div>
          )
        }
      }}
    </Query>
  );
}

export default QuestionDetails;
