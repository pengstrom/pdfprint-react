import React from 'react';
import $ from 'jquery';

import PrinterSelector from '../components/printer-selector.jsx';

class PrinterSelectorContainer extends React.Component {

  constructor(props) {
    super(props);

    this.source = 'http://localhost:8080/api/printers.php';

    this.state = {
      printers: []
    };
  }

  componentDidMount() {
    $.get(this.source, (result) => {
      this.setState({
        printers: result
      });
    });
  }

  onPrinterSelect(value) {
    var url = '/options/' + value;
    this.props.history.pushState(null, url);
  }

  render() {
    return <PrinterSelector
      defaultPrinter="pr2402"
      onClick={this.onPrinterSelect.bind(this)}
      printers={this.state.printers}
    />;
  }
}

export default PrinterSelectorContainer;

