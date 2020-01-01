import React from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import BookList from './components/BookList';

// apollo client set u
const client = new ApolloClient({
  uri: 'http://localhost:5500/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='main'>
        <h1>Ninja's Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
