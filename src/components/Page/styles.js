import styled from 'styled-components';
import { fluidRange } from 'polished';

import * as sizes from 'assets/stylesheets/js/sizes';

const foundSize = (visible = [], size = '') => visible.indexOf(size) > -1;

export const ViewContrainer = styled.div`
  margin: 0 auto;
  height: 100%;

  ${fluidRange(
    {
      prop: 'width',
      fromSize: '300px',
      toSize: sizes.tablet,
    },
    '400px',
  )}
`;

export const VisibleContainer = styled.div`
    display: none;

    @media (min-width: 0px) and (max-width: ${sizes.mobile}) {
      ${(props) => foundSize(props.visible, 'xs') && `
        display: inherit;
      `}
    }

    @media (min-width:${sizes.mobile}) and (max-width: ${sizes.tablet}) {
      ${(props) => foundSize(props.visible, 'sm') && `
        display: inherit;
      `}
    }

    @media (min-width:${sizes.tablet}) and (max-width:${sizes.monitor}) {
      ${(props) => foundSize(props.visible, 'md') && `
        display: inherit;
      `}
    }

    @media (min-width:${sizes.monitor}) {
      ${(props) => (foundSize(props.visible, 'lg') || foundSize(props.visible, 'xl')) && `
        display: inherit;
      `}
    }
`;

export default ViewContrainer;
