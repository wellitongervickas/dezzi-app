import React, {
  useState,
  useCallback,
  useContext,
} from 'react';

import { useRouteMatch } from 'react-router-dom';

import {
  billingType,
} from 'components/Contacts/helpers';

import { BillingsItemContainer } from 'components/Contacts/Billings/styles';
import BillingItemActions from 'components/Contacts/Billings/Item/Actions';

import monetize from 'helpers/text/monetize';
import context from '../../../store';
import { actions } from '../../../store/modules/billings';

const ContactsBillingsItem = ({ billing }) => {
  const { params } = useRouteMatch();
  const { states, storeDispatch } = useContext(context);
  const [buttonActions, setButtonActions] = useState(false);

  const onDeleteSuccess = useCallback(() => {
    storeDispatch('billings', 'LIST', states.billings.LIST.filter((i) => i.uuid !== billing.uuid));
  }, [states.billings.LIST, billing.uuid, storeDispatch]);

  const onDelete = useCallback(() => {
    actions.delete(params.uuid, billing.uuid).then(onDeleteSuccess);
  }, [onDeleteSuccess, params.uuid, billing.uuid]);

  return (
    <BillingsItemContainer
      onFocus={() => setButtonActions(true)}
      onMouseOver={() => setButtonActions(true)}
      onMouseLeave={() => setButtonActions(false)}
    >
      {monetize(billing.value)}
      {buttonActions && (
        <BillingItemActions
          uuid={billing.uuid}
          onDelete={onDelete}
        />
      )}
    </BillingsItemContainer>
  );
};

ContactsBillingsItem.propTypes = {
  billing: billingType.isRequired,
};

export default ContactsBillingsItem;
