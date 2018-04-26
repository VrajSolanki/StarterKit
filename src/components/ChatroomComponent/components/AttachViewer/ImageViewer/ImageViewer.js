import React, { PropTypes } from 'react'
import classes from './ImageViewer'
import Viewer from 'react-viewer';
import 'react-viewer/dist/index.css';

class ImageViewer extends React.Component {

  constructor() {
  super();
  this.state = {
      visible: true,
    };
  }

  showImageViewer = () => {
    this.setState({ visible: false });
  }

  render () {
    let imagesArray = [{
      src: this.props.attachment.url,
      alt: this.props.attachment.name
    }]

    return(
      <div className={classes.container}>
        <Viewer
          visible={this.state.visible}
          scalable={false}
          attribute={false}
          rotatable={true}
          zoomable={true}
          onClose={() => { this.setState({ visible: false }); this.props.closeImageViewer(); } }
          images={imagesArray}
          />
      </div>
    )
  }
}

export default ImageViewer;
