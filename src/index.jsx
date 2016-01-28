import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './app.jsx';

import PrinterSelectorContainer from './containers/printer-selector-container.jsx';
import IndexContainer from './containers/index-container.jsx';
import OptionsContainer from './containers/options-container.jsx';

import { Provider } from 'react-redux';
import configureStore from './configure-store.js';

let store = configureStore();

const history = createBrowserHistory();

const root = document.getElementById('root');

render((
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={App} >
        <IndexRoute component={IndexContainer} />
        <Route path="printer" component={PrinterSelectorContainer} />
        <Route path="options/:printer" component={OptionsContainer} />
      </Route>
    </Router>
  </Provider>
), root);
