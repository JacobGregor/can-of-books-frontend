import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks'
// import LoginForm from './LoginForm'
import BookFormModal from './BookFormModal'
import Profile from './Profile'
import UpdateBooks from './UpdateBooks'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    }
  }

 
 
  userHandler = (user) => {
    this.setState({
      user: user
    })
  }
  logoutHandler = () => {
    this.setState({
      user: undefined,
    })
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Router>
          <Header />
          <Switch>
            {/* Main Route */}
            <Route exact path="/"> {this.state.user ? ( <BestBooks user={this.state.user} /> ) : ( <Login user={this.state.user} userHandler={this.userHandler} />)} </Route>
            {/* Route to User Books */}
            <Route path="/BestBooks">{this.state.user ?( <BestBooks booksData={this.state.books} /> ):( <Login />)}
            </Route>
            {/* Route to NewBook Form */}
            <Route path="/NewBook">{this.state.user ? <BookFormModal /> : <Login />} </Route>
            {/* Route to Update Books */}
            <Route path="/UpdateBook"> {this.state.user ? <UpdateBooks /> : <Login />} </Route>
            {/* Route to Profile */}
            <Route path="/profile"> {this.state.user ? (<Profile user={this.state.user} logoutHandler={this.logoutHandler}/> ): (<Login />)} </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
