import React, { Component } from 'react'
import './App.css'
import BooksOnShelf from './BooksOnShelf'
import { Link } from 'react-router-dom'

class ListOfBooks extends Component{

    render() {
        const { books, handleChange } = this.props
        return (
          <div className="lists-of-books">

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              
            <div>
           <BooksOnShelf title="Currently Reading" handleChange={handleChange} books={books.filter(book => book.shelf === 'currentlyReading')}/>
           <BooksOnShelf title="Want To Read" handleChange={handleChange} books={books.filter(book => book.shelf === 'wantToRead')}/>
           <BooksOnShelf title="Read" handleChange={handleChange} books={books.filter(book => book.shelf === 'read')}/>
            </div>

            </div>
            <div className="open-search">
            <Link to="/search" className="add-contact" >Search Books to Add</Link>
            </div>
          </div>
          </div>
        )
      }
}

export default ListOfBooks