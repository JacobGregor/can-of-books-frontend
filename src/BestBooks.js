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
        <Carousel>
       {this.state.books ? this.state.books.map((data,index) =>(
         <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/02/23/07/37/wall-1217083_1280.jpg"
            alt={data.title}
            />
          <Carousel.Caption>
            <h1>{data.title}</h1>
            <h3>{data.description}</h3>
            <p>{data.status}</p>
          </Carousel.Caption>
        </Carousel.Item>
         )
         ) : <h1>Sorry No Books Available!</h1> }
         </Carousel>
      </>
    )
  }
}

export default BestBooks;
