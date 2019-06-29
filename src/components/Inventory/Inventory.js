import React from 'react';

import PropTypes from 'prop-types';

import Fish from '../Fish/Fish';

import fishShapes from '../../helpers/properties/fishShape';

class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.arrayOf(fishShapes.fishShape),
  }

  render() {
    const fishComponents = this.props.fishes.map(fish => (
      <Fish key={fish.id} fish={fish} addFishToOrder={this.props.addFishToOrder} />
    ));

    return (
      <div className="Inventory">
        <h1>Inventory</h1>
        <ul className="fishes">
          {fishComponents}
        </ul>
      </div>
    );
  }
}

export default Inventory;
