import React from 'react';

import format from '../../helpers/format';

import './NewOrder.scss';

class NewOrder extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes.find(x => x.id === key);
    const count = this.props.fishOrder[key];
    return (
      <li>
        <div className="col-2 count">
          {count} lbs
        </div>
        <div className="col-5">
          {fish.name}
        </div>
        <div className="col-3">
          {format.formatPrice(fish.price * count)}
        </div>
        <div className="col-2">
          <button className="btn btn-outline-dark">x</button>
        </div>
      </li>
    );
  };

  render() {
    const { fishOrder } = this.props;
    const orderIds = Object.keys(fishOrder);
    const orderExists = orderIds.length > 0;

    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes.find(x => x.id === key);
      const count = this.props.fishOrder[key];
      return prevTotal + count * fish.price;
    }, 0);
    return (
      <div className="NewOrder">
        <h1>New Order</h1>
        <form className='col-6 offset-3'>
          <div className="form-group">
            <label htmlFor="order-name">Order Name:</label>
            <input
              type="text"
              className="form-control"
              id="order-name"
              placeholder="John's Order"
            />
          </div>
        </form>
        <ul>{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total: <strong>{format.formatPrice(total)}</strong>
        </div>
        <div className="text-center">
          {
            orderExists ? (
              <button className="btn btn-outline-dark"> Save Order </button>
            ) : (
              <div>Add Inventory to your order</div>
            )
          }
        </div>
      </div>
    );
  }
}

export default NewOrder;
