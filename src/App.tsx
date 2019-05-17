import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Main from './route';
import Header from './Components/Header';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => {
  const [searchBy, onSearched] = React.useState<string>('');
  return (
    <div className="Dashboard">
      <ApolloProvider client={client} >
        <Header search={onSearched} />
        <Main search={searchBy} />
      </ApolloProvider>
    </div>
  )
}

export default App;
