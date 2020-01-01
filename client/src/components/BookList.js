import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBookQuery = gql``;

const BookList = () => {
  return (
    <div>
      <ul id='book-list'>
        <li>Book name</li>
      </ul>
    </div>
  );
};

export default getBookQuery(BookList);
