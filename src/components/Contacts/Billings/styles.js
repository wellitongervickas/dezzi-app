import styled from 'styled-components';

import * as sizes from 'assets/stylesheets/js/sizes';
import * as colors from 'assets/stylesheets/js/colors';

export const BillingsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BillingsItemContainer = styled.div`
  padding: ${sizes.sm()};
  color: ${colors.violetLight};
  border: 2px solid ${colors.violetDark};
  border-radius: ${sizes.sm()};
  margin: ${sizes.sm()};

  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  flex: 1 1 26%;

  @media screen and (max-width: ${sizes.tablet}) {
    flex: 1 1 100%;
  }
`;

export default BillingsListContainer;
