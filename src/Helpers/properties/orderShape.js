import PropTypes from 'prop-types';

const orderShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  dateTime: PropTypes.number.isRequired,
  fishes: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
});


export default { orderShape };
