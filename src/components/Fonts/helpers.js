import PropTypes from 'prop-types';

export const defaultProps = {
  color: null,
  className: null,
  children: null,
};

export const defaultPropTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default defaultPropTypes;
