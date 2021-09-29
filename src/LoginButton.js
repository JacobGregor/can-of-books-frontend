import { Component } from 'react'
import Link from 'react-bootstrap/NavLink'


export default class LoginButton extends Component {

  render() {
    return(
      <>
    <Link to="/user">
    <button  onClick={this.props.onLogIn}>
    Log In
    </button>
    </Link>
      </>
    )
    /* TODO: Render a button with label 'Log In'. When the button is clicked then show LoginForm instead */
  }
}


