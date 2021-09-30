import { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
let server = `${process.env.REACT_APP_SERVER}`
let apiCall = `${server}/books`


class BookFormModal extends Component{
  constructor(props){
    super(props);
      this.state = {
        newBook: []
      }
    }

    newBookSubmit = (event) => {
      event.preventDefault();
      this.sendNewBook({
        title: event.target.formName.value,
        description: event.target.formDescription.value,
        status: event.target.formStatus.value,
        email: event.target.formEmail.value
      })
    }

    sendNewBook = async (newBookSubmit) => {
     await axios.post(apiCall, newBookSubmit)
    }

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

export default BookFormModal;
////// -----------------------------------------   To-DO -------------------------------------
// 1. Bring in the <AddBookButton /> and replace the <Button></Button? with that.
// 2. create an event listener that on click will update the state of show: true
//3. create a Modal that listens for a button click and shows depending on the show: state.
