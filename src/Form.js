import React from "react";

class Form1 extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // with destructuring to prevent bugs
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  render() {
    return (
      <form>
        <label>
          First Name&nbsp;
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="Enter Here"
            onChange={this.handleChange}
          ></input>
        </label>
        <br />

        <label>
          Last Name&nbsp;
          <input
            type="text"
            name="lastName"
            placeholder="Enter Here"
            onChange={this.handleChange}
          ></input>
        </label>
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </form>
    );
  }
}

export default Form1;
