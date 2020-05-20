import React from 'react'
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';

import Separator from '.';

describe('Components Separator', () => {
  afterEach(cleanup);

  it('should have a snapshot with a default Separator component', async () => {
    const { asFragment } = render(<Separator />);
    expect(asFragment(<Separator />)).toMatchSnapshot();
  });
});
