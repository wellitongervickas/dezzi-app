import React from 'react';

import PropTypes from 'prop-types';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import FormButton from 'components/Form/Button';

import {
  BillingItemActionsContainer,
} from 'components/Contacts/Billings/Item/styles';

const BillingItemActions = ({ onDelete }) => {
  const handleDelete = onDelete;

  return (
    <BillingItemActionsContainer>
      <FormButton
        size="xs"
        color="red"
        icon={faTimes}
        onClick={handleDelete}
      />
    </BillingItemActionsContainer>
  );
};

BillingItemActions.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default BillingItemActions;
