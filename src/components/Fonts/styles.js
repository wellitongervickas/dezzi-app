import styled from 'styled-components';

import * as fonts from 'assets/stylesheets/js/fonts';
import * as sizes from 'assets/stylesheets/js/sizes';
import * as colors from 'assets/stylesheets/js/colors';

export const FontsTitleContainer = styled.div`
  margin-bottom: ${sizes.sm()};
  padding-bottom: ${sizes.sm()};
  border-bottom: ${sizes.sm(0.3)} solid #eee;

  h1 {
    font-size: ${sizes.sm(1.5)};
    font-weight: ${fonts.bold};
    color: ${(props) => props.color || colors.violetDark};
  }
`;

export const FontsSubtitleContainer = styled.div`
  margin-bottom: ${sizes.xs()};
  padding-bottom: ${sizes.xs()};

  h2 {
    font-size: ${sizes.sm(1.2)};
    font-weight: ${fonts.bold};
    color: ${(props) => props.color || colors.violetDark};
  }
`;
