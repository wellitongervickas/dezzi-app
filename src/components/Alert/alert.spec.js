import React from 'react'
import { render, cleanup } from '@testing-library/react';
import Alert from '.';

describe('Components Alert', () => {
  const text = "Warning is a warning";

  afterEach(cleanup);

  it('should have a snapshot Alert component', async () => {
    const { asFragment } = render(<Alert text={text} />);
    expect(asFragment(<Alert text={text} />)).toMatchSnapshot()
  });

  it('should have a valid alert text', async () => {
    const { getByTestId } = render(<Alert text={text} />);
    expect(getByTestId('text')).toHaveTextContent(text);
  });
});
