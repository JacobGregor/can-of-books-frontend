import { Component } from 'react'
import Button from 'react-bootstrap/Button'
import UpdateBooks from './UpdateBooks'

class UpdateButton extends Component {
constructor(props){
  super(props);
  this.state = {
    show: false
  }
};
onClick = () => {
  this.setState({
    show: true
  })
}

render() {
  if(this.state.show){
    return (
      <UpdateBooks onUpdate={this.props.onUpdate} id ={this.props.id}/>
    )
  } else{
     return(
       <Button onClick={this.onClick} variant="warning" >Update</Button>
      )
    }
  }
}
export default UpdateButton