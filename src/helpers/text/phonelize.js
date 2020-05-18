export const phonelize = (phone) => {
  if (['', undefined, null].indexOf(phone) > -1) {
    return '';
  }

  return phone.replace('+55', '');
};

export default phonelize;
