import React, { Component } from 'react';

/* ----Settings for books cover - background---- */
class Book extends Component {

	render () {

        let baseImage = this.props.book.imageLinks;
            if (baseImage) {
                baseImage = this.props.book.imageLinks.thumbnail
            } else {
                baseImage = ''
            }

	return (
		<div className="book">
            <div className="book-top">
                <div className="book-cover" 

                     style={{ width: 128, height: 193, backgroundImage: `url('${baseImage}'` }}>

                </div>
                {/* ----Shelf options for books---- */}
                    <div className="book-shelf-changer">
                       	<select
                          onChange={(e) => this.props.changeShelf(this.props.book, e.target.value)}
                          value={this.props.currentShelf}>

                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                             
                        </select>
                    </div>
            </div>
            {/* ----Titles and authors dynamic change---- */}
                <div className="book-title">
                    {this.props.book.title}
                </div>
                    <div className="book-authors">
                        {this.props.book.authors}
                    </div>
        </div>
    )
	}
}
export default Book;