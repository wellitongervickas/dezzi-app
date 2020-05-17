import styled from 'styled-components';
import { bold } from 'assets/stylesheets/js/fonts';
import { violetDarkBlack } from 'assets/stylesheets/js/colors';
import { md, sm } from 'assets/stylesheets/js/sizes';

const LogoContainer = styled.div`
  user-select: none;
  font-weight: ${bold};
  font-size: ${md()};
  color: ${violetDarkBlack};

  span {
    margin-left: ${sm()};
  }
`;

export default LogoContainer;
