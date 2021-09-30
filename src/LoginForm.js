import { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class LoginForm extends Component {


  handleSubmit = (event) => {
    console.log(this.props.userHandler)
    event.preventDefault()
    console.log(event)
    let userInfo = {
      email: event.target.formBasicEmail.value,
      userName: event.target.formBasicUserName.value
    }
    this.props.userHandler(userInfo)
  }

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>username</Form.Label>
          <Form.Control name='userName' type="userName" placeholder="Enter userName" />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button type="submit" variant="primary" >
          Submit
        </Button>
      </Form>
    );
  }
};

export default LoginForm;
