import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { render, cleanup, screen  } from '@testing-library/react';
import 'jest-styled-components';

import Logo from '.';

describe('Components Logo', () => {
  afterEach(cleanup);

  it('should have a snapshot with a default Logo component', async () => {
    const { asFragment } = render(
      <Router>
        <Switch>
          <Logo />
        </Switch>
      </Router>
    );

    expect(asFragment(<Logo />)).toMatchSnapshot();
  });

  it('should have a inline snapshot with Logo text', async () => {
    const { container } = render(
      <Router>
        <Switch>
          <Logo />
        </Switch>
      </Router>
    );

    expect(container.childNodes[0].childNodes[0].childNodes[0].getAttribute('data-icon')).toBe('frog');


    expect(container.childNodes[0].childNodes[0].childNodes[1]).toMatchInlineSnapshot(`
      <span>
        Dezzi
      </span>
    `);
  });
});
