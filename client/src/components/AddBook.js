import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import compose from 'lodash.flowright'
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries';

const AddBook = props => {
  const [state, setState] = useState({
    name: '',
    genre: '',
    authorId: ''
  });

  const handleChange = e => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addBookMutation({
        variables:{
            name: state.name,
            genre: state.genre,
            authorId: state.authorId
        },
        refetchQueries: [{query: getBooksQuery}]
    })
  };

  const displayAuthor = () => {
    let { data } = props.getAuthorsQuery;
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
    <form id='add-book' onSubmit={handleSubmit}>
      <div className='field'>
        <label htmlFor='name'>Book name: </label>
        <input type='text' name='name' onChange={handleChange} />
      </div>

      <div className='field'>
        <label htmlFor='genre'>Genre: </label>
        <input type='text' name='genre' onChange={handleChange} />
      </div>

      <div className='field'>
        <label htmlFor='name'>Author: </label>
        <select onChange={handleChange} name='authorId'>
          <option>Select author</option>
          {displayAuthor()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default compose(graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),graphql(addBookMutation,{name:'addBookMutation'}))(
  AddBook
);
