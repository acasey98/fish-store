import React from 'react';
import orderData from '../../helpers/data/orderData';

class OrderRow extends React.Component {
  render() {
    const { order } = this.props;
    return (
      <tr>
        <th>{order.id}</th>
        <td>{order.dateTime}</td>
        <td>5</td>
        <td> <button className="btn btn-danger">X</button></td>
      </tr>

    );
  }
}

export default OrderRow;
