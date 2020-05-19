import React, { createElement } from 'react'
import { render, cleanup } from '@testing-library/react';
import 'jest-styled-components';

import Wrapper from '.';

describe('Components Wrapper', () => {
  afterEach(cleanup);

  it('should have a snapshot with a default Wrapper component', async () => {
    const { asFragment } = render(<Wrapper />);
    expect(asFragment(<Wrapper />)).toMatchSnapshot();
  });

  it('should have a snapshot with a default Wrapper component styles', async () => {
    const { asFragment, container } = render(<Wrapper />);
    expect(asFragment(<Wrapper />)).toMatchSnapshot();

    expect(container.firstChild).toHaveStyleRule('background-color', '#FAFAFD');
  });

  it('should have a snapshot with a custom Wrapper component styles', async () => {
    const { asFragment, container } = render(<Wrapper backgroundColor="#333333" />);
    expect(asFragment(<Wrapper />)).toMatchSnapshot();

    expect(container.firstChild).toHaveStyleRule('background-color', '#333333');
  });

  it('should render wrapper with children component', () => {
    const text = 'my custom text';

    const { container } = render(<Wrapper>
      <span>{text}</span>
    </Wrapper>);

    expect(container.firstElementChild.childNodes[0]).toMatchInlineSnapshot(`
      <span>
        ${text}
      </span>
    `);
  });
});
