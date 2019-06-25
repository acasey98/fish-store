import React from 'react';

import './Auth.scss';

class Auth extends React.Component {
  render() {
    return (
      <div className="Auth">
      <h1>Auth</h1>
      <button className="btn btn-primary">Login with Google</button> 
      </div>
    );
  }
}

export default Auth;
