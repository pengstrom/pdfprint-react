import React from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';


class PrinterSelector extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'pr2402'
    };
  }

  renderPrinter(name) {
    return <option value={name} key={name}>{name}</option>;
  }

  getOptions() {
    return this.props.printers.map((name) => {
      return { value: name, label: name };
    });
  }

  newValue(newValue) {
    this.setState({
      value: newValue
    });
  }

  render() {
    let selectStyle = {
      border: 'none',
      borderRadius: 0,
      boxShadow: 'inset 0.25rem 0.25rem 0 rgba(0,0,0,0.1)'
    }
    return (
      <div className="printer">

        <div className="card">
          <div className="card-block card-block-title">
            <h4 className="card-title">Välj en skrivare</h4>
            <p className="card-text text-muted">Du kommer sedan kunna välja inställningar</p>
          </div>
        </div>
        <div className="card">

          <div className="card-block">
            <h6 className="card-title">Skrivare</h6>
            <Select
              name="printer"
              onChange={this.props.onClick}
              options={this.getOptions()}
              simpleValue
              style={selectStyle}
              value={this.state.value}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PrinterSelector;
