const monetize = (value) => Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
}).format(value || 0);

export default monetize;
