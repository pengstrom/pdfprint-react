import React from 'react';
import { Link } from 'react-router';

import _ from 'underscore';

import Index from '../components/index.jsx';

class IndexContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: []
    }
  }

  handleDrop(files) {
    console.log('Files: ', files);
    this.setState({
      files: _.union(this.state.files, files)
    });
  }

  render() {
    return <Index files={this.state.files} onDrop={this.handleDrop.bind(this)} />;
  }
}

export default IndexContainer;
