import React from "react";
import {Menu} from "semantic-ui-react"; 
import BookList from './BookList'
import BookInfo from './BookInfo'

class App extends React.Component {

  state = {
    books: [],
    bookInfo: null
  }

  componentDidMount(){
    fetch(`http://localhost:3000/books`)
    .then(res => res.json())
    .then(books => this.setState({books}))
  }

  displayBook = (bookInfo) => {
    this.setState(prevState => {
      if(prevState.bookInfo === bookInfo){
        return ({bookInfo:null})
      }else {
        return ({bookInfo:bookInfo})
      }
    })    
  }

  likeBook = (id) => {
    let ourUser = {"id":1, "username":"pouros"}
    if(this.state.bookInfo.users.find(user => ourUser.id === user.id)){
      let filteredUsers = this.state.bookInfo.users.filter(user => user.id !== 1)
      this.updateBook(filteredUsers)
    }else{
      let updateUsers = [...this.state.bookInfo.users, {"id":1, "username":"pouros"}]
      this.updateBook(updateUsers)
    }
  }

  updateBook = (updateUsers) => {
    fetch(`http://localhost:3000/books/${this.state.bookInfo.id}`, {
      method:'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({users:updateUsers}),
    })
    .then(res => res.json())
    .then(book => this.setState({bookInfo:book}))
  }

  render(){
    return (
      <div>
        <Menu inverted>
          <Menu.Item header>Bookliker</Menu.Item>
        </Menu>
        <main>
          <Menu vertical inverted>            
              <BookList onClick={this.displayBook} books={this.state.books}/>            
          </Menu>

        {this.state.bookInfo ? <BookInfo bookInfo={this.state.bookInfo} likeBook={this.likeBook} /> : null}

        </main>
      </div>
    );
  }
}

export default App;
