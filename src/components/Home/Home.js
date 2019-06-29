import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import './Home.scss';

import Orders from '../Orders/Orders';
import Inventory from '../Inventory/Inventory';
import NewOrder from '../NewOrder/NewOrder';
import fishData from '../../helpers/data/fishData';
import ordersData from '../../helpers/data/orderData';

class Home extends React.Component {
  state = {
    orders: [],
    fishes: [],
  }

  getOrders = () => {
    ordersData.getMyOrders(firebase.auth().currentUser.uid)
      .then(orders => this.setState({ orders }))
      .catch(err => console.error('cant get orders', err));
  };

  componentDidMount() {
    fishData.getFishes()
      .then(fishes => this.setState({ fishes }))
      .catch(err => console.error('could not get fishes', err));

    this.getOrders();
  }

  deleteOrder = (orderId) => {
    ordersData.deleteOrder(orderId)
      .then(() => this.getOrders())
      .catch(err => console.error('could not delete order', err));
  };

  render() {
    const { fishes, orders } = this.state;
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <Inventory fishes={fishes} />
          </div>
          <div className="col">
            <NewOrder />
          </div>
          <div className="col">
            <Orders orders={orders} deleteOrder={this.deleteOrder}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
