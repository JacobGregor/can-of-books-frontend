import React from 'react';
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
let server = `${process.env.REACT_APP_SERVER}`

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }
  
componentDidMount(){
  this.fetchBooks()
  console.log(this.state.books)
}


async fetchBooks(){
  let url = `${server}/books`
  if (this.props.email){
    url += `?email=${this.props.email}`
  } 
  try {
    const response = await axios.get(url);
    this.setState({ books: response.data})
  } catch{

  }
};

  render() {
    return (
      <>
       {this.state.books ? this.state.books.map((data,index) =>{
         return(
        <Carousel>
        <Carousel.Item key={index}>
         <h1>{data.title}</h1>
          <Carousel.Caption>
            <h3>{data.description}</h3>
            <p>{data.status}</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
         )
       }) : <h1>Sorry No Books Available!</h1> };
      </>
    )
  }
}

export default BestBooks;
