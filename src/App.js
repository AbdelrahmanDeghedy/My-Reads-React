import React, { Component } from 'react';
import './App.css'
import { Route } from 'react-router-dom';
import Search from './components/search';
import * as api from './BooksAPI';
import Shelf from './components/shelf';

class BooksApp extends Component {

  renderShelf = () => {
    return (
      <Shelf state={this.state} update={this.updateShelf} />
    )
  }

  renderSearch = () => {
    return (
      <Search searchquery={this.state.searchquery} filterSearchResults={this.filterSearchResults} clearQuery={this.clearQuery} results={this.state.searchResults} update={this.updateShelf} books={this.state.books}/>
    )
  }
  state = {
    searchquery : "",
    books : [],
    searchResults : []
  }
  async componentDidMount () {
    const books = await api.getAll ();
    this.setState ({ books });
    // console.log(books);
  }

  clearQuery= () => {
    this.setState ({searchquery : ""})
  }

  filterSearchResults = async (event) => {
    this.setState ({searchquery : event.target.value});
    if (event.target.value.length > 0) {
      const data = await api.search (event.target.value.trim ());
      this.setState ({searchResults : data});
    }
    else {
      this.setState ({searchResults : []});
    }
    
    
  }

  updateShelf = async (book, shelf) => {
    const data = await api.update(book, shelf);
    console.log(data);
    this.setState(prevState => ({
      books: prevState.books.filter(prevStateBook => {
        if (prevStateBook.id === book.id) {
          book.shelf = shelf;
          return book;
        } else {
          return book;
        }
      })
    }));
  };
  render() {
    
    return (
      <div className="app">
        <Route exact path='/' render={this.renderShelf} />
        <Route exact path='/search' render={this.renderSearch} />
      </div>
    )
  }
}

export default BooksApp
