import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

import PropTypes from 'prop-types';


class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <span className="navbar-brand">Fish Store</span>
          { authed ? (
          <button className="btn btn-danger my-2 my-sm-0" type="button" onClick={this.logMeOut}>Logout</button>
          ) : (
            ''
          )}
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
