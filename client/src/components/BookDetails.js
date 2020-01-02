import React from 'react';
import { graphql } from 'react-apollo';
import { getBookDetailsQuery } from '../queries';


const BookDetails = props =>{
    return (
        <div id="book-details">
            <p>Output book details here</p>
        </div>
    )
}

export default graphql(getBookDetailsQuery, {
    options: props=>{
        return {
            variables: {
                id: props.bookId
            }
        }
    } 
})(BookDetails)