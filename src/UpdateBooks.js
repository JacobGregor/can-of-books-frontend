import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UpdateBook extends Component {

  updateBookSubmit = (event) => {
    event.preventDefault();
    let id = this.props.id
    let updatedBookInfo = {
      title: event.target.formName.value,
      description: event.target.formDescription.value,
      email: event.target.formEmail.value,
      status: event.target.formStatus.value
    }
    this.props.onUpdate(id,updatedBookInfo)
  }

  render() {
    return (
      <>
      <Form onSubmit={this.updateBookSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Book Title</Form.Label>
          <Form.Control type="name" placeholder="Edit Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="name" placeholder="Edit Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="name" placeholder="Edit Email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formStatus">
          <Form.Check value="Have Read" type="checkbox" label="Have you read this book before?" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      </>
    )
  }
}

export default UpdateBook;
