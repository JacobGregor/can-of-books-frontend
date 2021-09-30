import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
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
    console.log(this.props.user.email);
    if (this.props.user.email){
      url += `?email=${this.props.user.email}`
    } 
    try {
      const response = await axios.get(url);
      console.log(response.data);
      this.setState({ books: response.data})
    } catch (error){
      console.log(error.message)
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
