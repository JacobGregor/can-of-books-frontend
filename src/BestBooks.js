import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



// async fetchBooks(){
//   let url = `${server}/books`
//   if (this.props.email){
//     url += `?email=${this.props.email}`
//   } 
//   try {
//     const response = await axios.get(url);
//     this.setState({ books: response.data})
//   } catch{

//   }
// };

  render() {
    return (
      <>
        <Carousel>
       {this.props.booksData ? this.props.booksData.map((data,index) =>(
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
