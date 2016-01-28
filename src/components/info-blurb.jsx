import React, { Component, PropTypes } from 'react';

class InfoBlurb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-block card-block-title">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text text-muted">{this.props.subtitle}</p>
        </div>
        <div className="card-block">
          <p className="card-text">{this.props.blurb}</p>
        </div>
      </div>
    )
  }
}

InfoBlurb.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired
}

export default InfoBlurb;
