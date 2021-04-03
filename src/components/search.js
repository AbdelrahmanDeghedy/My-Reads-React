import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component {
    

    render () {
      const searchquery = this.props.searchquery;
      const books = this.props.books;
      const filterSearchResults = this.props.filterSearchResults;
      const clearQuery = this.props.clearQuery
      const searchResults = this.props.results;
      const update = this.props.update;
      const displayResults = [];

        if (searchResults.length > 0 && searchquery !== "") {
          searchResults.forEach(result => {
            const matchingResults = books.filter(book => book.id === result.id);
            if (matchingResults.length > 0) {
              displayResults.push(...matchingResults);
            } else {
              displayResults.push(result);
            }
          });
        }
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' onClick={clearQuery} className='close-search'> Close </Link>
              <div className="search-books-input-wrapper">
                <input type="text" value={searchquery} onChange={filterSearchResults} placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {displayResults.map (book => 
                    <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                        {book.imageLinks && (
                        <img
                            src={book.imageLinks.thumbnail}
                            alt={book.title}
                            className="book-cover"
                            style={{ width: 128 }}
                        />
                        )}
                    
                    <div className="book-shelf-changer">
                        <select
                            id={book.id}
                            value={book.shelf ? book.shelf : "none"}
                            onChange={event => update (book, event.target.value)}
                        >
                            <option value="move" disabled>
                            Move to...
                            </option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                        </div>
                        <div className="book-title">
                            {book.title}
                        </div>
                        <div className="book-authors">
                            {book.authors && (book.authors.map (author => {
                                return <div key={book.author}> {author} </div> 
                            }))}
                        </div>
                    </div>
                    </li>
                )}
              </ol>
            </div>
        </div>
        )
    }
}