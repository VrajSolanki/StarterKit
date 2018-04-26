import React, { PropTypes } from 'react'
import classes from './AttachmentFeedAndSvg.scss'
import {ATTACHMENT_TYPE_TO_NAME} from 'store/static'
import shortid from 'shortid'
import PdfViewer from '../AttachViewer/PdfViewer'
import ImageViewer from '../AttachViewer/ImageViewer'
import FaClose from 'react-icons/lib/fa/close'
import FaPlus from 'react-icons/lib/fa/plus'
import FaMinus from 'react-icons/lib/fa/minus'
import FaLongArrowLeft from 'react-icons/lib/fa/long-arrow-left'
import FaLongArrowRight from 'react-icons/lib/fa/long-arrow-right'
import CancelSvg from 'components/SvgImages/CancelSvg'
import DownloadSvg from 'components/SvgImages/DownloadSvg'

class AttachmentFeedAndSvg extends React.Component {
  constructor() {
  super();
  this.state = {
      pdfViewerClass: classes.viewerContainer,
      showPdfViewer: false,
      showImageViewer: false,
      attachmentUrl: '',
      attachmentElement: {},
      currentZoomValue: 0.75,
      zoomStep: 0.15,
      previous: false,
      next: false
    };
  }

  resetPrevious = () => {
    this.setState({previous: false});
  }

  resetNext = () => {
    this.setState({next: false});
  }

  setPrevious = () => {
    this.setState({previous: true});
  }

  setNext = () => {
    this.setState({next: true});
  }

  increaseZoomValue = () => {
    let zoomValue = this.state.currentZoomValue + this.state.zoomStep;
    if(zoomValue <= 2.50){
      this.setState({currentZoomValue: zoomValue});
    }
  }

  decreaseZoomValue = () => {
      let zoomValue = this.state.currentZoomValue - this.state.zoomStep;
      if(zoomValue >= 0.30){
        this.setState({currentZoomValue: zoomValue});
      }
  }

  closePdfViewer = () => {
    let that = this;
    that.setState({ pdfViewerClass: classes.attachmentViewerAnimationClass });
    setTimeout(function(){ that.setState({showPdfViewer: false});}, 500);
    setTimeout(function(){ that.setState({pdfViewerClass: classes.viewerContainer, currentZoomValue: 0.75});}, 500);
  }

  closeImageViewer = () => {
    let that = this;
    setTimeout(function(){ that.setState({showImageViewer: false});}, 500);
  }

  showAttachment = (attachment) => {
    const type = attachment.type
    if(type == 'image'){
      this.setState({showImageViewer: true, attachmentElement: attachment})
    }
    else if (type == 'attachment') {
      this.setState({showPdfViewer: true, attachmentUrl: attachment.url})
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleEscKey);
  }

  componentWillUnmount() {
     document.removeEventListener("keydown", this.handleEscKey);
  }

    handleEscKey = (event) => {
      if(event.keyCode == 27 && this.state.showPdfViewer){
        this.closePdfViewer();
      }
    }

  render () {
    const attachments = this.props.attachments;
    const attachmentTypeToName = ATTACHMENT_TYPE_TO_NAME;
    return (
      <div className={classes.attachmentFeed}>
        {
          attachments.map((attachmentItem, key)=>{
              let mediaTypeObject = {
                type: attachmentItem.type,
                url: attachmentItem.url,
                name: attachmentItem.name
              }
              let attachementTypeName = _.get(attachmentItem, `name`, '.')
              let attachmentTypeValue = ''
              !!(attachementTypeName.split(".")[1]) ? attachmentTypeValue = attachementTypeName.split(".")[1].toLowerCase() : attachmentTypeValue = ''

              return (
                <div className={classes.attachmentItemAndCancel} key={shortid.generate()}>
                  <div className={classes.attachmentItem} onClick={()=>{this.showAttachment(mediaTypeObject)}}>
                    <SvgForAttachmentType type={attachmentItem.type} url={attachmentItem.url}/>
                    <div className={classes.attachmentNameAndType}>
                      <div className={classes.attachmentName}>{attachmentItem.name}</div>
                    <div className={classes.attachmentTypeText}>{attachmentTypeToName[attachmentTypeValue]}</div>
                    </div>
                  </div>
                  <a href={attachmentItem.url} download className={classes.downloadSvgContainer}><DownloadSvg /></a>
                { this.props.showDeleteButton ? <div className={classes.cancelSvgContainer} onClick={(event) => {this.props.onDelete(event, key)}}><CancelSvg /></div> : null}
                </div>
              )
          })
        }

        { this.state.showPdfViewer ?
            <div className={classes.attachmentViewer}>
              <div className={classes.crossSvg} onClick={this.closePdfViewer}>
                <FaClose size={20} color='white' className={classes.closeIcon}/>
              </div>
              <center className={this.state.pdfViewerClass}>
                <PdfViewer attachmentUrl={this.state.attachmentUrl}
                            zoomLevel={this.state.currentZoomValue}
                            previous={this.state.previous}
                            next={this.state.next}
                            resetPrevious={this.resetPrevious}
                            resetNext={this.resetNext}/>
              </center>
                <div className={classes.zoomUnzoom}>
                  <div className={classes.zoomContainer} onClick={this.increaseZoomValue}><FaPlus size={20} color='white' className={classes.plusAndMinusIcon}/></div>
                  <div className={classes.zoomContainer} onClick={this.decreaseZoomValue}><FaMinus size={20} color='white' className={classes.plusAndMinusIcon}/></div>
                <div className={classes.zoomContainer} onClick={this.setPrevious}><FaLongArrowLeft size={20} color='white' className={classes.plusAndMinusIcon}/></div>
              <div className={classes.zoomContainer} onClick={this.setNext}><FaLongArrowRight size={20} color='white' className={classes.plusAndMinusIcon}/></div>
              </div>
            </div> : null }

          {this.state.showImageViewer ? <ImageViewer attachment={this.state.attachmentElement} closeImageViewer={this.closeImageViewer}/> : null}


      </div>
    )
  }
}

const SvgForAttachmentType = ({type, url}) => {
  let imageStyle = {
    backgroundImage: 'url('+ url + ')',
  }
  let svgHolder = null;

  switch (type) {
    case 'image':
        svgHolder = <div style={imageStyle} className={classes.attachmentImage}></div>
      break;
    case 'attachment':
        svgHolder =
        <div className={classes.svgContainer}>
          <svg className={classes.svgItem} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 32 32">
          <g>
            <path d="M11.998779,9.092628c-0.118751-0.440785-0.561548-0.73766-1.353554-0.908742
              c-0.43374-0.093591-0.975161-0.152966-1.609166-0.176112C8.3779,6.901784,7.780124,5.399292,7.42991,3.969255
              C8.655655,1.39197,8.342677,0.75092,8.224933,0.508388c-0.122774-0.253603-0.341154-0.42569-0.615891-0.485065
              C7.495324-0.00083,7.373555-0.006867,7.24776,0.008228C6.921699,0.04345,6.644951,0.2095,6.448711,0.486248
              C5.917857,1.235986,6.095479,2.719359,6.342541,3.84648c-0.756279,1.524633-1.829058,3.269659-2.87869,4.682587
              C1.45365,8.976896,0.298853,9.60587,0.032168,10.398881c-0.100636,0.302915-0.126298,0.772883,0.323544,1.290153
              c0.128814,0.148941,0.296876,0.24857,0.485568,0.289831c0.065414,0.014089,0.133343,0.021133,0.201271,0.021133
              c0.407575,0,0.865972-0.244545,1.441609-0.767852c0.462925-0.42267,0.99076-1.019442,1.56992-1.77421
              c1.350533-0.269705,2.974294-0.430722,4.353004-0.430722h0.057363c0.605828,0.885596,1.216688,1.400851,1.814466,1.529666
              c0.459906,0.099629,0.910754-0.032204,1.279081-0.366315C11.949469,9.834315,12.098409,9.46498,11.998779,9.092628z
               M10.937071,9.355288c-0.018115,0.021133-0.042267,0.045286-0.072457,0.072456
              c-0.09661,0.088561-0.189195,0.130827-0.281781,0.130827c-0.026165,0-0.053337-0.003019-0.085541-0.010064
              c-0.185169-0.040253-0.413613-0.197244-0.658158-0.448834c0.221399,0.025159,0.418645,0.055349,0.58872,0.091578
              C10.697557,9.249619,10.852536,9.312014,10.937071,9.355288z M7.144332,2.270054
              C7.134966,1.706766,7.205878,1.297346,7.351718,1.091297C7.36376,1.075242,7.373126,1.063201,7.382492,1.053835
              C7.390519,1.217067,7.365097,1.576983,7.144332,2.270054z M7.853588,8.002741C6.895534,8.0279,5.890685,8.11646,4.922064,8.260369
              c0.642057-0.934907,1.277574-1.966424,1.815471-2.947625C7.043468,6.266772,7.43293,7.207717,7.853588,8.002741z
               M2.338239,9.913816c-0.739673,0.813137-1.12209,0.999314-1.249898,1.041581
              c-0.106171-0.141896-0.085038-0.206304-0.077993-0.228443C1.073246,10.538765,1.4617,10.225787,2.338239,9.913816z"/>
          </g>
          </svg>
        </div>
      break;
    default:

  }
  return svgHolder;
}

export default AttachmentFeedAndSvg
