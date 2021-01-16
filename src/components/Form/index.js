import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    passWord: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    if(name === "pasword" && value.length < 15){
         // Updating the input's state
    this.setState({
      [name]: value
    });
    }

    // Updating the input's state
    // this.setState({
    //   [name]: value
    // });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if(!this.state.firstName || !this.state.lastName)
  {
    alert("Please fill out you first and last name");
  }else if (this.state.password.legth < 6){
    alert(`Choose a more secure password ${this.state.firstName} ${this.state.lastName}`)
  }else {
   // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
   alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
   this.setState({
     firstName: "",
     lastName: ""
   });

  }

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    // this.setState({
    //   firstName: "",
    //   lastName: ""
    // });

  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
           <input
            value={this.state.password}
            name="passWord"
            onChange={this.handleInputChange}
            type="passWor"
            placeholder="Enter Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
