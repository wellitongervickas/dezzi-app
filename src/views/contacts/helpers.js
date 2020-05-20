import monetize from 'helpers/text/monetize';

export const calculateAmount = (list = []) => {
  const value = list.reduce((acc, curr) => {
    // eslint-disable-next-line no-param-reassign
    acc += curr.value;
    return acc;
  }, 0);

  return `Amount: ${monetize(value)}`;
};
