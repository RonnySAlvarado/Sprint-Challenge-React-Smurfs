import React, { Component } from "react";
import "../App.css";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    if (!this.state.name || !this.state.age || !this.state.height) {
      console.log(
        "Error, must fill all 3 input fields to add a new Smurf to the village!"
      );
    } else {
      let newSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      };
      this.props.addSmurf(newSmurf);
      this.setState({
        name: "",
        age: "",
        height: ""
      });
    }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <h2>Smurf's Name</h2>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <h2>Smurf's Age</h2>
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <h2>Smurf's Height</h2>
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <br />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
