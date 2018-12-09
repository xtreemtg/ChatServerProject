import React, { Component } from 'react';

export class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameValue: '',
      lastNameValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleChange(event) {
    this.setState({firstNameValue: event.target.value});
  }
  handleLastNameChange(event) {
    console.log(event.target.value);
    this.setState({lastNameValue: event.target.value});
  }

  handleSubmit(event) {
   // alert('A name was submitted: ' + this.state.firstNameValue + " " +this.state.lastNameValue);
  //  event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action = {this.props.action} method = {this.props.get}>
        <label>
          First Name:<br/>
          <input type="text" name = "first" value={this.state.firstNameValue} onChange={this.handleChange} />
          <br/>
        </label>
        <label>
          Last Name:<br/>
          <input type="text" name = "last" value={this.state.lastNameValue} onChange={this.handleLastNameChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

