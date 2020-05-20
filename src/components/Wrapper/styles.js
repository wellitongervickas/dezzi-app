import styled from 'styled-components';

import { sm } from 'assets/stylesheets/js/sizes';
import { white } from 'assets/stylesheets/js/colors';

export const WrapperContainer = styled.div`
  background-color: ${(props) => props.backgroundColor || white};
  padding: ${sm()};
  border-radius: ${sm()};
`;

export default WrapperContainer;
