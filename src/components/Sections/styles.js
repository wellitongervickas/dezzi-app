import styled from 'styled-components';

import * as sizes from 'assets/stylesheets/js/sizes';
import * as fonts from 'assets/stylesheets/js/fonts';
import * as colors from 'assets/stylesheets/js/colors';

export const SectionsContainer = styled.div``;
export const SectionsBlockContainer = styled.div``;
export const SectionsListContainer = styled.ul``;

export const SectionsItemContainer = styled.li`
  margin-bottom: ${sizes.sm()};
`;

export const SectionItemLabel = styled.h4`
  color: ${colors.violetDark};
  font-weight: ${fonts.bold};
  margin-bottom: ${sizes.xs(0.5)};
`;

export const SectionItemValue = styled.p`
  color: ${colors.violetLight};
`;

export default SectionsContainer;
