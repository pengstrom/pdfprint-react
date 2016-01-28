import React from 'react';

import filesize from 'filesize';
import FontAwesome from 'react-fontawesome';

import Card from './card.jsx';

import './file.scss';


class File extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let file = this.props.file;
    let name = file.name;
    let size = filesize(file.size);

    let copies = 1;

    return <Card>
      <div className="row">
        <div className="col-xs-1">
          <h5 className="text-xs-center">&times;</h5>

        </div>
        <div className="col-xs-7">
          <h5 className=""><FontAwesome name='file-pdf-o' /> {name}</h5>
        </div>
        <div className="col-xs-2">
          <p className="card-text lead text-xs-center">{size}</p>
        </div>
        <div className="col-xs-2">
          <p className="card-text lead text-xs-center">{copies} Cop(y|ies)</p>
        </div>
      </div>
    </Card>;
  }
}

export default File;
