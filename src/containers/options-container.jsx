import React from 'react';
import { Link } from 'react-router';

import $ from 'jquery';

import Options from '../components/options.jsx';

class OptionsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.source = 'http://localhost:8080/api/options.php';

    this.state = {
      options: [],
      loaded: false
    };
  }

  componentDidMount() {
    let data = {
      printer: this.props.params.printer
    };

    $.ajax(this.source, {
      type: 'POST',
      data: data,
      success: (res) => {
        this.setState({
          options: res,
          loaded: true
        });
      }
    });
  }

  render() {
    return <Options loaded={this.state.loaded} options={this.state.options} />; 
  }
}

export default OptionsContainer;
