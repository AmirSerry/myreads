import React, {Component} from 'react'

class Book extends Component {

    render() {
        const {book, handleChange} = this.props
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193,  backgroundImage: `url(${book.imageLinks !=null ? book.imageLinks.thumbnail:''})` }}></div>
                        <div className="book-shelf-changer">
                            <select defaultValue={book.shelf ? book.shelf:'none' } onChange={(event) => handleChange(event, book)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book