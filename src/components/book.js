import React, { Component } from 'react';

export default class Book extends Component {
    render () {
        const books = this.props.book;
        const update = this.props.update;
        return (
            <ol className="books-grid">
                {books.map (book => 
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
                            onChange={e => update(book, e.target.value)}
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
        )
    }
}
