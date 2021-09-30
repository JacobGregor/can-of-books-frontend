import { Component } from 'react'
import LoginButtons from './LoginButton'
import Card from 'react-bootstrap/Card';


class Login extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          <LoginButtons userHandler={this.props.userHandler} />
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
