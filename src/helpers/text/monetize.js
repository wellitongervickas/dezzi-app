const monetize = (value) => Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
}).format(value);

export default monetize;
