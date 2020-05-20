import styled from 'styled-components';

import * as colors from 'assets/stylesheets/js/colors';
import * as sizes from 'assets/stylesheets/js/sizes';

export const BillingItemActionsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  color: ${colors.white};

  & > :last-of-type {
    margin-left: ${sizes.xs()}
  }
`;

export default BillingItemActionsContainer;
