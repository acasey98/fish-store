import React from 'react';

import './Home.scss';

import Orders from '../Orders/Orders';
import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <Inventory />
          </div>
          <div className="col">
            <NewOrder />
          </div>
          <div className="col">
            <Orders />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
