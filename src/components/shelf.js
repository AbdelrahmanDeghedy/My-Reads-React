import React, { Component } from 'react';
import Book from './book';
import { Link } from 'react-router-dom';


export default class Shelf extends Component {

    render () {
          const update = this.props.update;
          let books = this.props.state.books;
          let booksCurrentlyReading = books.filter (book => book.shelf === "currentlyReading");
          let booksWantToRead = books.filter (book => book.shelf === "wantToRead");
          let booksRead = books.filter (book => book.shelf === "read");

        return (
            <div>
              <div>
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                  {booksCurrentlyReading.length > 0 && (
                    <div className="bookshelf">
                      <h2 className="bookshelf-title"> Currently Reading </h2>
                      <div className="bookshelf-books">
                        <Book book={booksCurrentlyReading} update={update}/>
                      </div>
                    </div>
                  )}

                  {booksWantToRead.length > 0 && (
                    <div className="bookshelf">
                      <h2 className="bookshelf-title"> Want To Read </h2>
                      <div className="bookshelf-books">
                        <Book book={booksWantToRead} update={update}/>
                      </div>
                    </div>
                  )}

                  {booksRead.length > 0 && (
                    <div className="bookshelf">
                      <h2 className="bookshelf-title"> Read </h2>
                      <div className="bookshelf-books">
                        <Book book={booksRead} update={update}/>
                      </div>
                    </div>
                  )}
                  </div>
                </div>
                <div className="open-search">
                  <Link to='/search' className='btn'> Add a book </Link>
                </div>
              </div>
            </div>
          
          </div>
        )
    }
}