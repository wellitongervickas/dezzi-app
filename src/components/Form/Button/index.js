import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import {
  FormButtonContainer,
  FormButtonLabel,
} from 'components/Form/Button/styles';

import {
  defaultButtonProps,
  defaultButtonPropTypes,
} from 'components/Form/helpers';

const FormButton = ({
  icon,
  label,
  color,
  size,
  type,
  onClick,
  loading,
}) => (
  <FormButtonContainer
    type={type}
    color={color}
    size={size}
    onClick={onClick}
  >
    {loading && (
      <FontAwesomeIcon icon={faSpinner} spin />
    )}
    {!loading && icon && (
      <FontAwesomeIcon icon={icon} />
    )}
    {!loading && label && (
      <FormButtonLabel useIcon={!!icon}>
        {label}
      </FormButtonLabel>
    )}
  </FormButtonContainer>
);

FormButton.defaultProps = {
  ...defaultButtonProps,
};

FormButton.propTypes = {
  ...defaultButtonPropTypes,
};

export default FormButton;
