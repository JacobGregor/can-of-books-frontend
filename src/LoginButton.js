import { Component } from 'react'
import LoginForm from './LoginForm'
import Button from 'react-bootstrap/Button'


class LoginButtons extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    }
  }

  showHandle = (event) =>{
    console.log(event)
      this.setState({
        show: true
      })
      console.log(this.state.show)
  }

  render() {
      if(this.state.show){
        return ( 
          <>
        <LoginForm userHandler={this.props.userHandler}/> 
         </>
        )
      } else{
        return (
          <>
          <p>It appears you do not have a profile...</p>
          <Button onClick={this.showHandle}> Login </Button>
          </>
        ) 
      };
    };
  }

export default LoginButtons
