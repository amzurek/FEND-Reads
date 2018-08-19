import React from 'react'
import SearchSite from './Search-Site'
import HomeSite from './Home-Site'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

/* ----Starter array for books---- */
class BooksApp extends React.Component {
  state = {
    books: []
  };

  /* ----Created component---- */
componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
/* ----Shelf updating when books change location---- */
changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
    )
};

/* -------RENDERING------- */
  render() {
    return (
      <div className="app">

          <Route exact path='/' render={() => (
            <HomeSite
            books={this.state.books}
            changeShelf={this.changeShelf}
            />
            )}
          />
          <Route path='/search' render={() => (
            <SearchSite
            changeShelf={this.changeShelf}
            books={this.state.books}
            />
            )}
          />
      </div>
      )
  }
}
export default BooksApp
