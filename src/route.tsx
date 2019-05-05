import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Questions from './Components/Questions'
import { QuestionDetails, AskQuestion } from './Components/Question'
interface Props {
    search: string,
};

const Main = (props: Props) => (
    <Switch>
        <Route exact path="/">
            <Questions searchString={props.search} />
        </Route>
        <Route path="/question/:id" component={QuestionDetails} />
        <Route path="/askQuestion" component={AskQuestion} />
    </ Switch>
);

export default Main;