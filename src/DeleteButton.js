import { Component } from 'react'
import Button from 'react-bootstrap/Button'

class DeleteButton extends Component {

// put an onclick here.
onClick = () => {
  let id = this.props.id
  this.props.onDelete(id)
}

  render() {
    return(
      <Button onClick={this.onClick} variant="danger" >Delete</Button>
    )
  }
}
export default DeleteButton