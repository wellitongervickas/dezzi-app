import React from 'react'
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';

import Alert from '.';

describe('Components Alert', () => {
  const text = "Warning is a warning";

  afterEach(cleanup);

  it('should have a snapshot with a default Alert component', async () => {
    const { asFragment } = render(<Alert text={text} />);
    expect(asFragment(<Alert text={text} />)).toMatchSnapshot();
  });

  it('should have a snapshot with a default Alert component styles', async () => {
    const { asFragment, container } = render(<Alert text={text} />);
    expect(asFragment(<Alert text={text} />)).toMatchSnapshot();

    expect(container.firstChild).toHaveStyleRule('background-color', '#73C6B6');
    expect(container.firstChild).toHaveStyleRule('color', '#FAFAFD');
  });

  it('should have a snapshot Alert component with props', async () => {
    const { asFragment, container } = render(<Alert text={text} color="red" />);
    expect(asFragment(<Alert text={text} />)).toMatchSnapshot();

    expect(container.firstChild).toHaveStyleRule('background-color', '#CB4335')
    expect(container.firstChild).toHaveStyleRule('color', '#FAFAFD')
  });


  it('should have a inline snapshot with alert text', () => {
    const { container } = render(<Alert text={text} />);

    expect(container.childNodes[0].childNodes[0]).toMatchInlineSnapshot(`
      <span>
        ${text}
      </span>
    `);
  });
});
