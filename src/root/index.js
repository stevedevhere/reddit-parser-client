/* eslint no-console: 0 */

import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import relay from '../relay';
import { PostsPage } from '../pages';
import s from './styles';

class Root extends React.Component {
  renderPostsPage(routeProps) {
    return (
      <PostsPage
        relayEnvironment={relay.getEnv()}
        {...routeProps}
      />
    );
  }

  render() {
    const theme = window.themeConfig;

    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div className={s.root(theme)}>
            <div className={s.pageContainer()}>
              <Switch>
                <Route exact={true} path="/" render={this.renderPostsPage} />

                <Redirect to="/" />
              </Switch>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export { Root };
export default Root;
