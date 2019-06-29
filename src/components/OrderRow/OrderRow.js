import React from 'react';
import moment from 'moment';

import orderShapes from '../../helpers/properties/orderShape';

class OrderRow extends React.Component {
  static propTypes = {
    order: orderShapes.orderShape,
  }

  render() {
    const { order } = this.props;
    const numFish = Object.values(order.fishes).reduce((a, b) => a + b);
    return (
      <tr>
        <th>{order.name}</th>
        <td>{moment(order.dateTime).format('LLL')}</td>
        <td>{numFish}</td>
        <td> <button className="btn btn-danger">X</button></td>
      </tr>
    );
  }
}

export default OrderRow;
