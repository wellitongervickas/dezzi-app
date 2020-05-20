import React from 'react';

import ContactsBillingsItem from 'components/Contacts/Billings/Item';
import BillingsListContainer from 'components/Contacts/Billings/styles';
import Loading from 'components/Loading';

import {
  defaultBillingPropTypes,
} from 'components/Contacts/helpers';

// eslint-disable-next-line no-confusing-arrow
const ContactsBillingsList = ({ billings, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <BillingsListContainer>
      {billings.length > 0
        ? billings.map((item) => <ContactsBillingsItem key={item.uuid} billing={item} />)
        : (
          <div>No values yet!</div>
        )}
    </BillingsListContainer>
  );
};

ContactsBillingsList.defaultProps = {
  billings: [],
  loading: false,
};

ContactsBillingsList.propTypes = {
  ...defaultBillingPropTypes,
};

export default ContactsBillingsList;
