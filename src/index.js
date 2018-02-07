/* eslint import/extensions: 0 */

import React from 'react';
import ReactDOM from 'react-dom';

import auth from '../auth.json';
import graphqlConfig from '../.graphqlconfig';

import './css/index.css';
import { loadDefaultCss } from './css/loadDefaultCss';
import relay from './relay';
import { Root } from './root';

loadDefaultCss();

relay.init({
  endpoint: graphqlConfig.extensions.endpoints.devHTTPS,
  accessToken: auth.access_token
});

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
