import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks'
import LoginForm from './LoginForm'
import BookFormModal from './BookFormModal'
import Profile from './Profile'
import Logout from './LogoutButton'
import Login from './Login'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
let server = `${process.env.REACT_APP_SERVER}`

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      user: false,
      books: [],
      
    }
    console.log(this.state.user)
  }

componentDidMount(){
  this.fetchBooks()
}


async fetchBooks(){
  let url = `${server}/books`
  console.log(this.state.email);
  // if (this.state.email){
    // url += `?email=${this.state.email}`
  // } 
  try {
    const response = await axios.get(url);
    console.log(response.data);
    this.setState({ books: response.data})
  } catch (error){
    console.log(error.message)
  }
};

  emailHandler = (event) => {
    this.setState({
      email: event,
      user: true
    })
  }
  loginHandler = (event) => {
    event.preventDefault()
    this.setState({
      user: true
    })
  }
  loginHandler = () => {
    this.setState({
      user: true,
    })
    console.log(this.state.user)
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            {/* {Need to get the routes sorted out and how to route between pages} */}
            {/* <Route exact path="/login">
              <Login user={this.state.user}/>
            </Route> */}
            <Route path="/user">
              {this.state.user ? <LoginForm loginHandler={this.loginHandler} emailHandler={this.emailHandler}/> :
             <Logout />};
            </Route>
            <Route exact path="/BookFormModal">
              <BookFormModal fetchBooks={this.fetchBooks}/>
            </Route>
            <Route>
            <BestBooks booksData={this.state.books} email={this.state.email} />
            </Route>
            <Route path="/profile">
            <Profile />
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
