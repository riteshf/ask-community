import React from 'react';
import './App.css';
import Main from './route';
import Header from './Components/Header';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: "http://locolhost:4000/graphql"
});

const App = () => {
  const [searchString, setSearchString] = React.useState('');
  return (
    <div className="Dashboard">
      <ApolloProvider client={client} >
        <Header search={setSearchString} />
        <Main search={searchString} />
      </ApolloProvider>
    </div>
  )
}

export default App;
