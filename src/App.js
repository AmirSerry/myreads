import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListOfBooks from './ListOfBooks'
import SearchForBooks from './SearchForBooks'

class BooksApp extends React.Component {
  state = {
    booksList: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => 
      this.setState({
        booksList: books
      })
     
    );
  }


  handleChange  = (event, book) => {
    const shelf = event.target.value

    if (this.state.booksList) {
      BooksAPI.update(book,shelf).then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          booksList: state.booksList.filter(b => b.id !== book.id).concat([ book ])
        }))
      })
    }
}

  render() {
    
      return (
        <div className="app">
           
           <Route exact path="/" render={() => (
              <ListOfBooks books={this.state.booksList} handleChange={this.handleChange}/>
          )}/>
           <Route path="/search" render={() => (
            <SearchForBooks books={this.state.booksList} handleChange={this.handleChange} />
        )}/>
           
        </div>
      
      )
   
    
  }
}

export default BooksApp
