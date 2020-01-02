import React from 'react';
import { graphql } from 'react-apollo';
import { getBookDetailsQuery } from '../queries';

const BookDetails = props => {
  const { book } = props.data;

  const displayBookDetails = () => {
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by author</p>
          <ul>
            {book.author.books.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  };
  return <div id='book-details'>{displayBookDetails()}</div>;
};

export default graphql(getBookDetailsQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
