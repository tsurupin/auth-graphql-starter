import React, { Component } from 'react';

class AuthForm extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: ''};
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
  }
  render() {
    return (
      <div className="row">
        <form className="col s4" onSubmit={this.onSubmit.bind(this)}>
        <div className="input-field">
          <label>Email</label>
          <input
            type='email'
            value={this.state.email}
            onChange={e => this.setState{(email: e.target.value )}}
            />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input
            type='password'
            value={this.state.password}
            onChange={e => this.setState{(password: e.target.value )}}
            />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
    )
  }
}

export default AuthForm;
