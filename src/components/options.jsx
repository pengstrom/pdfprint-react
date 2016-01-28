import React from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';


class Options extends React.Component {

  constructor(props) {
    super(props);
  }

  renderOption(name, data) {
    let dislpayName = data.description;
    let defaultValue = data.default;
    let values = data.values;

    let selectStyle = {
      border: 'none',
      borderRadius: 0,
      boxShadow: 'inset 0.25rem 0.25rem 0 rgba(0,0,0,0.1)'
    }

    let options = values.map((value) => {
      return { value: value, label: value };
    });

    return <div key={name} className="col-md-6">
      <div className="card">
        <div className="card-block">
          <h6 className="card-title">{dislpayName}</h6>

          <Select
            name={name}
            options={options}
            simpleValue
            style={selectStyle}
            value={defaultValue}
          />
        </div>
      </div>
    </div>;
  }

  renderLoading() {
    return <div className="card">
      <div className="card-block">
        <p className="card-text text-muted">Laddar alternativ...</p>
      </div>
    </div>;
  }

  renderResult() {
    if (this.props.loaded) {
      return Object.keys(this.props.options).map((key) => {
        return this.renderOption(key, this.props.options[key]);
      });
    } else {
      return this.renderLoading();
    }
  }

  render() {
    return <div className="options">
      <div className="card">
        <div className="card-block card-block-title">
          <h4 className="card-title">Välj inställningar</h4>
          <p className="card-text text-muted">De förvalda inställningarna är standard för den här skrivaren</p>
        </div>
      </div>

      {this.renderResult()}

    </div>
  }
}

export default Options;

