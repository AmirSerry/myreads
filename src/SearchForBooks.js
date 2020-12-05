import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchForBooks extends Component{

  state = {  
    result: []
  }

  searchBooks = (query) => {
    if(!query) {
      this.setState({
        result: []
      })
    } else {
        BooksAPI.search(query).then(books => {
          this.setState({ result: books })
          console.log(books)
        })
    }
}

    render() {
        return (
          <div className="search-for-books">
           <div className="search-books">
            <div className="search-books-bar">
            <Link to="/" className="close-search" >Back</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={(event) => this.searchBooks(event.target.value)} />

              </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
          {this.state.result.length>0 ?this.state.result.map(book => (
              <Book key={book.id} book={book} handleChange={this.props.handleChange} />
          )):<h3> No Result Found </h3>}
        </ol>
            </div>
          </div>
          </div>
        )
      }
}

export default SearchForBooks