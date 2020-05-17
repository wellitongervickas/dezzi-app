/* eslint-disable react/prop-types */

import React, {
  useMemo,
} from 'react';

import PropTypes from 'prop-types';

import {
  FormInputContainer,
  FormInputLabel,
  FormInputField,
  FormInputRequired,
  FormInputError,
} from 'components/Form/Input/styles';

import {
  defaultFieldPropTypes,
} from 'components/Form/helpers';

const FormInput = ({
  field,
  register,
  error,
  clearError,
  loading,
}) => {
  const isRequired = useMemo(() => field
    .validations
    .find((item) => item.type === 'blank'), [field.validations]);

  return (
    <FormInputContainer>
      <FormInputLabel
        htmlFor={field.id}
      >
        {field.label}
        {isRequired && (
          <FormInputRequired>*</FormInputRequired>
        )}
      </FormInputLabel>
      <FormInputField
        type={field.fieldType || 'tel'}
        id={field.id}
        name={field.id}
        placeholder={field.placeholder}
        ref={register}
        onInput={() => clearError(field.id)}
        defaultValue={field.value}
        disabled={field.disabled || loading}
      />
      {error && <FormInputError>{error.message}</FormInputError>}
    </FormInputContainer>
  );
};

FormInput.defaultProps = {
  register: () => {},
  clearError: () => {},
  error: null,
  loading: false,
};

FormInput.propTypes = {
  clearError: PropTypes.func,
  register: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  field: PropTypes.shape({
    ...defaultFieldPropTypes,
  }).isRequired,
};

export default FormInput;
