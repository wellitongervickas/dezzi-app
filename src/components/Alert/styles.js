import styled from 'styled-components';

import * as colors from 'assets/stylesheets/js/colors';
import * as sizes from 'assets/stylesheets/js/sizes';

const AlertContainer = styled.div`
  padding: ${sizes.xs()} ${sizes.sm()};
  color: ${colors.white};
  border-radius: ${sizes.xs()};
  margin-bottom: ${sizes.sm()};

  ${(props) => props.color === 'red' && `
    background-color: ${colors.red};
  `}

  ${(props) => props.color === 'green' && `
    background-color: ${colors.green};
  `}
`;

export default AlertContainer;
