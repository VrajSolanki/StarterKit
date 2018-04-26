import React, { PropTypes } from 'react'
import classes from './ChatItem.scss'
import empty_profile_img from './profile_blank.png'
import moment from 'moment'
import Textarea from 'react-textarea-autosize';
const THUMB_URL = 'http://cloud.aischool.net/unsafe/'

class ChatItem extends React.Component {
  render () {
    const createdDate = moment(this.props.comment.created_at).format('MMMM Do, YYYY');
    const user = this.props.sender
    let teacher_profile_img = user.profile_image?`url(${THUMB_URL}150x150/${user.profile_image})`:'url('+empty_profile_img+')';

    return (
      <div className={classes.container}>
        <div className={classes.userDetailsAndDate}>
          <div style={{ backgroundImage: teacher_profile_img }} className={classes.profilePic}></div>
          <div className={classes.userName}>{`${this.props.sender.first_name} ${this.props.sender.last_name}`}</div>
          <div className={classes.createdDate}>{createdDate}</div>
        </div>
        {/* <Textarea disabled={true} className={classes.message} defaultValue={this.props.comment.data.comment}/> */}
        <div className={classes.message}>{this.props.comment.data.comment}</div>
      </div>
    )
  }
}

export default ChatItem;
