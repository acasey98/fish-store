const formatPrice = cents => (cents / 100).toLocaleString('en-us', { style: 'currency', currency: 'USD' });

export default { formatPrice };
