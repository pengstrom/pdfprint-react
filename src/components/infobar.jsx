import React, { Component } from 'react';
import { Link } from 'react-router';

import InfoBlurb from '../components/info-blurb.jsx';
import Card from '../components/card.jsx';

import Status from './status.jsx';

import '../fa/scss/font-awesome.scss';

class Infobar extends Component {
  constructor(props) {
    super(props);

    this.changeTo2206 = this.changeTo2206.bind(this);
  }

  changeTo2206() {
    this.props.changePrinter('pr2206');
  }

  render() {
    return (
      <div className="infobar">

        <Card
          withTitle
          subtitle="Skriv ut på ITC"
          title="Pelles PDF-skrivare" >
          <p className="card-text">Här kan du med X-lösenord skriva it på skrivarna vid ITC.</p>
        </Card>

        <Status printer={this.props.activePrinter} />
      </div>
    );
}
}

export default Infobar;
