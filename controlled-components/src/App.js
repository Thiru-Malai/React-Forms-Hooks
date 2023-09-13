import React from "react";
import App1 from './App1';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.updateSubmit = this.updateSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  updateSubmit(event) {
    alert("Successfully Submitted " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.updateSubmit}>
          <input
            type="name"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="submit"></input>
        </form>
        <br />
        <br></br>
        <App1></App1>
      </>
    );
  }
}

export default App;
