import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class UpdateBook extends Component {



  render() {
    return (
      <>
      <Form onSubmit={this.newBookSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Book Title</Form.Label>
          <Form.Control type="name" placeholder="Enter Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="name" placeholder="What is the book about?" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="name" placeholder="Enter your email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formStatus">
          <Form.Check value="Have Read" type="checkbox" label="Have you read this book before?" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </>
    )
  }
}

export default UpdateBook;
