import Book from './Book';
import * as BooksAPI from './BooksAPI'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SearchSite extends Component {
	state = {
		query: '',
		findBooks: []
		};

	updateQuery = function(query) {
		this.setState({
			query: query
		});

		this.updateBooks(query);
		};

    updateBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((findBooks) => {
        if (findBooks.error) {
          this.setState ({ findBooks: [] });
        } else {
          this.setState({ findBooks });
        }
      })
    } else {
      this.setState({ findBooks: [] })
    }
  };

	render() {
		return (
			<div className = "search-books">
            	<div className = "search-books-bar">
                	<Link className = "close-search" to = '/'>Close</Link>
                		<div className = "search-books-input-wrapper">
             
                			<input type = "text" placeholder = "Search by title or author"
								        onChange = {(e) =>
								        	this.updateQuery(e.target.value)}
								   			value = {this.state.query}
                			/>
                </div>
            </div>

                <div className = "search-books-results">
              		<ol className = "books-grid">
              			{
              				this.state.findBooks.map(findBook => {
              						let shelf = "none";

              						this.props.books.map(book => {
              							if (book.id === findBook.id) {
              							shelf = book.shelf
                          } else {
                            return '';
                          }
                          });
              						return (
              							<li key = {findBook.id}>
              								<Book
              									book = { findBook }
                                                changeShelf = {this.props.changeShelf}
              									currentShelf = { shelf }
              								/>
              							</li>
              							)
              						})
              			}
              		</ol>
            	</div>
          	</div>
		)
	}
}

export default SearchSite;