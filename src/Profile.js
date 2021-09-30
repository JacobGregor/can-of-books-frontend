import { Component } from "react";
import Button from 'react-bootstrap/Button'

class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <>
      <p>Hello! {this.props.user.userName}</p>
      <p>Thats a nice Email: {this.props.user.email}</p>
      <Button type='click' onClick={this.props.logoutHandler}>Logout</Button>
      </>
    )
  }
};

export default Profile;
