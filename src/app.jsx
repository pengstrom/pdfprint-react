import React from 'react';
import { Router, Route, Link, Redirect, IndexRoute } from 'react-router';

import './scss/main.scss';

import LoginContainer from './containers/login-container.jsx';
import InfobarContainer from './containers/infobar-container.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <InfobarContainer />
          </div>
          <div className="col-md-6">

            {this.props.children}

          </div>
          <div className="col-md-3">
            <LoginContainer />
          </div>
        </div>
      </div>
    </div>
  }
}

export default App;
