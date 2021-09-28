import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks'
import LoginForm from './LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      user: false,
      
    }
    console.log(this.state.user)
  }

  emailHandler = (event) => {
    this.setState({
      email: event,
      user: true
    })
    console.log(this.state.email)
  }
  loginHandler = (event) => {
    event.preventDefault()
    this.setState({
      user: true
    })
    console.log(this.state.user)
    console.log(this.state.email)
  }


  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              <LoginForm loginHandler={this.loginHandler} emailHandler={this.emailHandler}/>
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              <BestBooks email={this.state.email} />
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
