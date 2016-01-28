import React, { Component, PropTypes } from 'react';

import './card.scss';

class Card extends Component {
  constructor(props) {
    super(props)

    this.renderTitle = this.renderTitle.bind(this);
  }

  renderTitle() {
    if (this.props.withTitle) {
      return <div className="card-block card-block-title">
        <h4 className="card-title">{this.props.title}</h4>
        <p className="card-text text-muted">{this.props.subtitle}</p>
      </div>
    }
  }

  render() {
    return <div className="card">

      {this.renderTitle()}

      <div className="card-block">
        {this.props.children}
      </div>
    </div>
  }
}

Card.propTypes = {
  withTitle: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Card;
