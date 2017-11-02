import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'components';
import { asyncLoad } from 'hocs';
import { ROUTES } from 'utils/constants';

import Home from './Home';

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route
            path={ROUTES.HOME.path}
            exact={ROUTES.HOME.exact}
            component={Home}
          />
          <Route
            path={ROUTES.ABOUT.path}
            exact={ROUTES.ABOUT.exact}
            component={asyncLoad({
              importer: () => import(/* webpackChunkName: "About" */ './About')
            })}
          />
          <Route
            path={ROUTES.CONTACT.path}
            exact={ROUTES.CONTACT.exact}
            component={asyncLoad({
              importer: () =>
                import(/* webpackChunkName: "Contact" */ './Contact')
            })}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
