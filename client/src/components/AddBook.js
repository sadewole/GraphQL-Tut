import React from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries';

const AddBook = props => {
  const displayAuthor = () => {
    let { data } = props;
    if (data.loading) {
      return <option disabled>Loading Authors...</option>;
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };
  return (
    <form id='add-book'>
      <div className='field'>
        <label htmlFor='name'>Book name: </label>
        <input type='text' />
      </div>

      <div className='field'>
        <label htmlFor='genre'>Genre: </label>
        <input type='text' />
      </div>

      <div className='field'>
        <label htmlFor='name'>Author: </label>
        <select>
          <option>Select author</option>
          {displayAuthor()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default graphql(getAuthorsQuery)(AddBook);
