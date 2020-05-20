/* eslint-disable react/jsx-props-no-spreading */
import React, {
  useMemo,
  useState,
} from 'react';

import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import {
  FormContainer,
  FormFields,
  FormButtons,
} from 'components/Form/styles';

import FormInput from 'components/Form/Input';
import FormButton from 'components/Form/Button';

import {
  defaultProps,
  defaultPropTypes,
  defaultFieldPropTypes,
} from 'components/Form/helpers';

// eslint-disable-next-line react/prop-types
const RenderField = ({ type, ...rest }) => {
  if (type === 'input') {
    return <FormInput {...rest} />;
  }

  return <FormInput {...rest} />;
};

const Form = ({
  fields,
  button,
  onSubmit,
  formErrors,
  loading,
}) => {
  const {
    handleSubmit,
    register,
    setError,
    clearError,
    errors,
  } = useForm();

  const [formFields] = useState([...fields]);

  useMemo(() => {
    formErrors.forEach((error) => setError(error.param, error.in, error.message));
  }, [formErrors, setError]);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormFields>
        {formFields.map((field) => (
          <RenderField
            key={field.id}
            field={field}
            register={register}
            clearError={clearError}
            loading={loading}
            error={errors[field.id]}
          />
        ))}
      </FormFields>
      <FormButtons>
        <FormButton
          type="submit"
          loading={loading}
          label={button.label}
          icon={button.icon}
          color={button.color}
          size={button.size}
        />
      </FormButtons>
    </FormContainer>
  );
};

Form.defaultProps = {
  ...defaultProps,
};

Form.propTypes = {
  ...defaultPropTypes,
};

RenderField.propTypes = {
  field: PropTypes.shape({
    ...defaultFieldPropTypes,
  }).isRequired,
};

export default Form;
