import validator from 'validator';

const blank = (value) => validator.isEmpty(value || '');

blank.message = () => 'Field is required';

export default blank;
