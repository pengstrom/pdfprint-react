import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

class Statusline extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <div className="row">
      <div className="col-sm-6">
        <p className="card-text text-xs-right">
          <strong>{this.props.title}</strong> <FontAwesome name={this.props.icon} />
        </p>
      </div>
      <div className="col-sm-6">
        <p className="card-text text-xs-left">
          {this.props.children}
        </p>
      </div>
    </div>
  }
}

Statusline.propTypes = {
  title: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Statusline;
