import React from 'react'
import { render, cleanup } from '@testing-library/react';
import Wrapper from '.';

describe('Components Wrapper', () => {
  afterEach(cleanup);

  it('should have a snapshot with a default wrapper component', async () => {
    const { asFragment } = render(<Wrapper />);
    expect(asFragment(<Wrapper />)).toMatchSnapshot();
  });
});
