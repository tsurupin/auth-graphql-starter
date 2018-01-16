import React, { Component } from 'react';
import { graphql } from 'react-graphql';
import { Link } from 'react-router';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';

class Header extends Component {

  onLogputClick() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderButtons() {
    const { loading, user } = this.props.data;
    if (loading) { return <div />; }
    if (user) {
      return (
        <li><a onClick={() => this.onLogoutClick()}>Logout</a></li>
      );
    } else {
      return(
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }

  }

  render() {
    return(
      <nav>
        <div className="vav-wrapper">
          <Link to="/" className="brand-logo link" > Home</Link>
          <ul className="right">
            {this.renderButtons()}
            </ul>
        </div>
      </nav>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);
