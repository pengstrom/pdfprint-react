import React from 'react';
import { Link } from 'react-router';

import Select from 'react-select';
import Dropzone from 'react-dropzone';
import FontAwesome from 'react-fontawesome';

import File from '../components/file.jsx';
import Card from './card.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  renderFiles() {
    return this.props.files.map((file) => {
      return <File key={file.name} file={file} />;
});
  }

  render() {
    return <div className="index">
      <Card
        withTitle
        title="Filer att ladda upp"
        subtitle="Lägg till dokument genom att släppa eller klicka"
        >
        <Dropzone onDrop={this.props.onDrop} className="dropzone">
          <button className="center-block btn btn-primary btn-lg">
            Klicka eller släpp dokument här <FontAwesome name="upload" />
          </button>
        </Dropzone>
      </Card>

      {this.renderFiles()}

    </div>
    }
    }

    export default Index;
