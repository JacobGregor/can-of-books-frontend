import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Nav.Link as={Link} href='/' to='/'>My Book Library</Nav.Link>
        <Nav.Link as={Link} href='/profile' to='/profile'>Profile</Nav.Link>
        <Nav.Link as={Link} href='/NewBook' to='/NewBook'>Add to Library</Nav.Link>
        <Nav.Link as={Link} href='/UpdateBook' to='/UpdateBook'>Update Library</Nav.Link>
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
      </Navbar>
    )
  }
}
export default Header;
