import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Questions from './Components/Questions'
import { QuestionDetails, AskQuestion } from './Components/Question'

const Main = () => (
    <Switch>
        <Route exact path = "/" component = { Questions } />
        <Route path = "/questionDetails" component = { QuestionDetails } />
        <Route path = "/askQuestion" component = { AskQuestion } />
    </ Switch>
);

export default Main;