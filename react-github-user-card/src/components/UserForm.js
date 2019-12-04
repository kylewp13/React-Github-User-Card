import React, { Component } from "react";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        search: ''
    };
  }


  handleChanges = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewUser(this.state.search);
    this.setState({
        search: ''
    });
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            placeholder="Search for a GitHub user"
            value={this.search}
            name="search"
            onChange={this.handleChanges}
            />
            <button onChange={this.fetchUser}>Search</button>
        </form>
    );
  }
}

export default UserForm;