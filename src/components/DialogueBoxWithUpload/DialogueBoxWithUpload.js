import React, { PropTypes } from 'react'
import {Modal} from 'react-bootstrap'
import classes from './DialogueBoxWithUpload.scss'
import Dropzone from 'react-dropzone';
import FaCamera from 'react-icons/lib/fa/camera';
import { connect } from 'react-redux';
import { Line, Circle } from 'rc-progress';
import InputTextField from 'components/UIElements/InputTextField'
import Button from 'components/UIElements/Button'
import UploadSVG from 'components/SvgImages/UploadSVG'
import classNames from 'classnames';
import UIButton from 'components/UIElements/UIButton'

import { sendComment, showDropZone, isFileUploading, onDrop, saveFilesToUpload, setFilenameToUpload, shouldSendComment } from '../../routes/Teacher/routes/Homework/containers/HomeworkModule'

class DialogueBoxWithUpload extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: this.props.showModal
    }
  }

  componentWillMount() {
    this.props.shouldSendComment(true);
  }

  onDrop = (files) => {
    this.props.saveFilesToUpload(files);
    let name = ''
    if(files.length > 1 ){ name = files[0].name + ' & ' + (files.length-1) + ' more'}
    else if (files.length == 1){ name = files[0].name }
    else{ name = 'Drag a file here or browse to upload a file'}
    this.props.setFilenameToUpload(name)
  }
  getDropZone = () => {
    return (
      <div className={classes.dropZoneContainer}>
        <div className={classes.imageDropZone}>
          <Dropzone accept="image/jpeg,image/png, application/pdf, application/x-iwork-keynote-sffkey, application/x-iwork-pages-sffpages, application/x-iwork-numbers-sffnumbers"
                  onDrop={this.onDrop}
                  className={classes.dropZone}
                  activeClassName={classes.dropZoneActive}>
                  <div className={classes.upload}><UploadSVG /></div>
                  <label className={classes.imageText}>
                  {this.props.filenameToUpload}
                  </label>
                  <div className={classes.violateImageFormats}>Valid Formats: .jpg, .jpeg, .png (Image) .pdf (Pdf) .pages (Pages) or .key (Keynote)</div>
          </Dropzone>
        </div>
      </div>
    )
  }

  getUploadProgress(){
    return(
      <div className={classes.uploadProgress}>
        { this.props.uploadingFileId.map((fileId, key)=>{
            let percentage = this.props.progressOfUploads[fileId];
            if(percentage > 0){ return <div className={classes.progressBarContainer} key={key}><Line percent={percentage} strokeWidth="1" strokeColor="#2387FB" /> </div>}
            else{return <div className={classes.progressBarContainer} key={key}><Line percent={0} strokeWidth="1" strokeColor="#2387FB" /> </div>}
          })
        }
        {/* <img src="https://thomas.vanhoutte.be/miniblog/wp-content/uploads/light_blue_material_design_loading.gif"
             width={75}
             height={75}/> */}
      </div>
    )
  }

  saveDataAndUpload = () => {
    let comment = this.refs.commentBox.value;
    this.props.onDrop().then((urlAndCancelStatus) => {

      let attachmentUrl = _.get(urlAndCancelStatus, `attachmentUrl`, '');
      const commentSend = _.get(urlAndCancelStatus, `commentSend`, true);

      if((!!comment || !!attachmentUrl)){
        if(commentSend){
          this.props.sendComment(this.props.student_id, this.props.context_id, comment, attachmentUrl)
        }
      }
      this.close();
    });
  }

  close = () => {
    //this.setState({ showModal: false });
    this.props.shouldSendComment(false);
    this.props.isFileUploading(false);
    this.props.saveFilesToUpload([]);
    this.props.setFilenameToUpload('Drag a file here or browse to upload a file');
    this.props.toggleDialogueBoxDisplay(false);
 }

 open = () => {
   this.setState({ showModal: true });
 }

  render () {
    let dropZone = this.getDropZone();
    let uploadingProgress = this.getUploadProgress();
    return(
      <div className="static-modal">
        <Modal keyboard show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton={true} className={classes.headerStyle}>
            <Modal.Title>{this.props.modalTitle}</Modal.Title>
          </Modal.Header>

          <Modal.Body className={classes.bodyStyle}>
            {dropZone}
            {this.props.fileUploadingStatus ? uploadingProgress: null}
            <div className={classes.commentBody}>
              <input type='text' ref='commentBox' rows="2" placeholder="Type a comment(Optional)" className={classes.comment}></input>
            </div>

          </Modal.Body>

          <Modal.Footer className={classes.footerStyle}>
            <div className={classes.button1Div}>
              <UIButton color='grey' size='sm' onClick={this.close}>{this.props.button1}</UIButton>
            </div>
            <div className={classes.buttonDiv}>
              <UIButton color='blue' size='sm' disabled={this.props.fileUploadingStatus} onClick={this.saveDataAndUpload}>{this.props.button2}</UIButton>
            </div>
            {/*<Button type="secondary-light" className={classes.button1} size="lg" onClick={this.close}>{this.props.button1}</Button>
            <Button type="secondary-light" className={classes.button2} size="lg" disabled={this.props.fileUploadingStatus} onClick={this.saveDataAndUpload}>{this.props.button2}</Button>*/}
          </Modal.Footer>

     </Modal>
   </div>
    )
  }
}

const mapActionCreators =  {
  sendComment,showDropZone,
  isFileUploading, onDrop,
  saveFilesToUpload, setFilenameToUpload,
  shouldSendComment
};
const mapStateToProps = state => ({
  dropZone: state.teacher_homework.dropZone,
  fileUploadingStatus: state.teacher_homework.fileUploadingStatus,
  filenameToUpload: state.teacher_homework.filenameToUpload,
  uploadingFileId: state.teacher_homework.uploadingFileId,
  commentSend: state.teacher_homework.commentSend,
  progressOfUploads: state.app_services.progressOfUploads,
});

export default connect(mapStateToProps, mapActionCreators)(DialogueBoxWithUpload);
