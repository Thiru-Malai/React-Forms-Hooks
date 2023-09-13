import React from "react";
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }
  handleSubmit(event){
    console.log(event.target)
    alert("Successfully Submitted")
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="name">Name</label>
          <input type="text" id="name" ref={this.input} />
          <br/>
            <label for="email">Email</label>
            <input type="text" id="email" ref={this.input} />
          <br/>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}
export default App;
