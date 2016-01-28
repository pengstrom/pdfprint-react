import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changePrinter } from '../actions.js';

import Infobar from '../components/infobar.jsx';


class InfobarContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Infobar
        changePrinter={this.props.changePrinter}
        activePrinter={this.props.printer}
      />
  }
}

function mapStateToProps(state) {
  return {
    printer: state.printers.active,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changePrinter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InfobarContainer);
