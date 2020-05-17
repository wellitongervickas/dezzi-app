import PropTypes from 'prop-types';

export const setNavLink = (uuid) => `/contacts/${uuid}`;

export const billingType = PropTypes.shape({
  value: PropTypes.number.isRequired,
  uuid: PropTypes.string.isRequired,
});

export const defaultBillingPropTypes = {
  loading: PropTypes.bool,
  billings: PropTypes.arrayOf(billingType),
};

export const contactType = PropTypes.shape({
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
});

export const defaultPropTypes = {
  contacts: PropTypes.arrayOf(contactType),
};
