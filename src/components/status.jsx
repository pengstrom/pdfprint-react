import React, { Component } from 'react';

import FontAwesome from 'react-fontawesome';

import Card from './card.jsx';
import Statusline from './statusline.jsx';

class Status extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <div className="status">
      <Card>
        <Statusline
          title="Skrivare"
          icon="print" >
          {this.props.printer}
        </Statusline>

        <Statusline
          title="Dokument"
          icon="file-pdf-o" >
          {12}
        </Statusline>

        <Statusline
          title="Inställningar"
          icon="gear" >
          {12}
        </Statusline>
    </Card>
    <Card>
      <button className="btn btn-lg btn-primary btn-block">
        <strong>Skriv ut</strong> <FontAwesome name="print" />
      </button>
    </Card>
  </div>
  }
}

export default Status;
