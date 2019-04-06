import React from "react";
import "../App.css";

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      name: this.props.name,
      age: this.props.age,
      height: this.props.height
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editHandlerTrue = e => {
    e.preventDefault();
    this.setState({ edit: true });
  };
  editHandlerFalse = () => {
    this.props.editSmurf(
      this.props.id,
      this.state.name,
      this.state.age,
      this.state.height
    );
    this.setState({ edit: false });
  };

  render() {
    if (this.state.edit === false) {
      return (
        <div className="Smurf">
          <h3>{this.props.name}</h3>
          <strong>{this.props.height} tall</strong>
          <p>{this.props.age} smurf years old</p>
          <button
            onClick={() => this.props.deleteSmurf(this.props.id)}
            className="delete"
          >
            Delete
          </button>
          <button onClick={this.editHandlerTrue} className="edit">
            Edit
          </button>
        </div>
      );
    } else {
      return (
        <div className="edit-form-container">
          <form
            onSubmit={() =>
              this.editHandlerFalse(
                this.props.id,
                this.state.name,
                this.state.age,
                this.state.height
              )
            }
          >
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
            <button type="submit">Finish Edit</button>
          </form>
        </div>
      );
    }
  }
}

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
