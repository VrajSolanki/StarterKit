import React, { PropTypes } from 'react'
import classes from './CommentBox.scss'
import Textarea from 'react-textarea-autosize';
import SendMessage from 'components/SvgImages/SendMessage'
import AttachmentSvg from 'components/SvgImages/AttachmentSvg'
import empty_profile_img from '../ChatItem/profile_blank.png'

const THUMB_URL = 'http://cloud.aischool.net/unsafe/'

class CommentBox extends React.Component {
  handleEnterKey = (event) => {
      if(event.keyCode == 13){
        event.preventDefault();
        event.stopPropagation();
        let comment = event.target.value;
        if(!!comment){
          this.props.sendComment(comment);
           event.target.value = null;
        }
      }
  }

  sendMessage = () => {
    const comment = this.refs.commentElement.value;
    if(!!comment){
      this.props.sendComment(comment);
      this.refs.commentElement.value = null;
    }
  }

  render () {
    const user = this.props.user;
    let teacher_profile_img = user.img?`url(${THUMB_URL}150x150/${user.img})`:'url('+empty_profile_img+')';

    return (
      <div className={classes.commentDiv}>
        <div style={{ backgroundImage: teacher_profile_img }} className={classes.profilePic}></div>
        <Textarea type='text' name="response_textField"
                  maxRows={3}
                  minRows={3}
                  ref='commentElement'
                  placeholder="Type your comment here"
                  onKeyDown={this.handleEnterKey}
                  className={classes.response_textField} />

        <div className={classes.actionSvg}>
          {this.props.attachmentSupport ? <div className={classes.svgContainer} onClick={() => {this.props.toggleDilogueBoxDisplay(true)}}><AttachmentSvg /></div>: null}
          <div className={classes.messageSendSvg} onClick={this.sendMessage}><SendMessage /></div>
        </div>
      </div>
    )
  }

}
 export default CommentBox
