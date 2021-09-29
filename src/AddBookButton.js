import { Component } from "react";

class LogoutButton extends Component {
  
  render() {
    return (
      <button onClick={this.props.}>
        Log Out
      </button>
    );
  }
};

export default LogoutButton;