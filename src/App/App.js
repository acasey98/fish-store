import React from 'react';

import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  render() {
    const loadComponent = () => {
      if (this.state.authed) {
        return <Home />;
      }
      return <Auth />;
    };

    return (
      <div className="App">
        {loadComponent()}
      </div>
    );
  }
}

export default App;
