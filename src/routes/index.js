import React, {
  useContext,
} from 'react';

import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import routes from 'routes/routes';
import storeContext from '../store';

const RenderRoute = ({
  name,
  path,
  component,
  meta,
}) => {
  const { states } = useContext(storeContext);
  const showRoute = meta.public || (meta.protected && states.auth.READ.token);

  return showRoute ? (
    <Route
      key={name}
      path={path}
      component={component}
      exact
    />
  ) : (
    <Redirect
      key="redirect"
      to={{
        pathname: '/auth',
        state: { from: path },
      }}
    />
  );
};

const Routes = () => (
  <Router>
    <Switch>
      {routes.map(RenderRoute)}
    </Switch>
  </Router>
);

RenderRoute.propTypes = {
  meta: PropTypes.shape({
    public: PropTypes.bool,
    protected: PropTypes.bool,
  }).isRequired,
  component: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Routes;
