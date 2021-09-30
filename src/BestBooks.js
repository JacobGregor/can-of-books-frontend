import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import DeleteButton from './DeleteButton'
import UpdateButton from './UpdateButton'
let server = `${process.env.REACT_APP_SERVER}`


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      delete: false
    }
  }

  async componentDidMount(){
    let url = `${server}/books`
    if (this.props.user.email){
      url += `?email=${this.props.user.email}`
    } 
    try {
      const response = await axios.get(url);
      this.setState({ 
        books: response.data,
      })
    } catch (error){
      console.log(error.message)
    }
  }
/// Currently refreshed the whole page and takes me back to login screen
  windowRefresh = () => {
    window.location.reload(false)
  }
  /// My thought was it would trigger a state change a componentDidMount() but it did not...
  pageRefresh = () => this.setState({delete: false})
  
  onDelete = async (id) => {
    let deleteURL = `${server}/books/${id}`
    try{
      await axios.delete(deleteURL)
      this.setState({
        delete: true
      })
      // this.pageRefresh();
      // this.windowRefresh();
  } catch(error){
    console.log(error)

  }
  //Now just link up the pathway to the backend for a delete request and then see if you need to this.fetchBooks();
  };
  
  onUpdate = async (id, updatedBookInfo) => {
    let updateURL = `${server}/books/${id}`
    try {
      await axios.put(updateURL,updatedBookInfo)
    } catch(error) {
      console.log("not updated")
    }
  };

  render() {
    return (
      <>
        <Carousel>
       {this.state.books ? this.state.books.map((data,index) =>(
         <Carousel.Item key={index} onChange={console.log(index)}>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2016/02/23/07/37/wall-1217083_1280.jpg"
            alt={data.title}
            />
          <Carousel.Caption>
            <h1>{data.title}</h1>
            <h3>{data.description}</h3>
            <p>{data.status}</p>
            <DeleteButton onDelete={this.onDelete} id={data._id}/>
            <UpdateButton onUpdate={this.onUpdate} id={data._id}/>
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
