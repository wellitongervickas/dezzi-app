import styled from 'styled-components';

import * as sizes from 'assets/stylesheets/js/sizes';

const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: ${sizes.xl()}
`;

export default LoadingContainer;
