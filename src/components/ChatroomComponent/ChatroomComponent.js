import React, { PropTypes } from 'react'
import classes from './ChatroomComponent.scss'
import CommentBox from './components/CommentBox'
import ChatItem from './components/ChatItem'
import shortid from 'shortid'

class ChatroomComponent extends React.Component {

  scrollChatComponentToBottom = () => {
    this.refs.chatFeed.scrollTop = this.refs.chatFeed.scrollHeight;
  }

  componentDidMount() {
    this.scrollChatComponentToBottom();
  }

  componentDidUpdate(prevProps) {
    if(!!prevProps.commentsContent.commentsData && !!this.props.commentsContent.commentsData){
      if(prevProps.commentsContent.commentsData.length < this.props.commentsContent.commentsData.length){
        this.scrollChatComponentToBottom();
      }
    }
  }

  render () {
    let commentsContent = this.props.commentsContent;
    let userData = this.props.commentsContent.userData;
    let chatFeed = (_.isEmpty(commentsContent)) ? <div className={classes.chatItemContainer}></div> : commentsContent.commentsData.map((comment,key)=>{
      return(
        <div className={classes.chatItemContainer} key={shortid.generate()}>
          <ChatItem sender={_.get(userData, `${comment.from}`, {})} comment={comment} />
          <hr className={classes.horizontalRule} />
        </div>
      )
    });
    return (
      <div className={classes.container}>
        <div className={classes.chatFeed} ref='chatFeed'>{chatFeed}</div>
        <CommentBox attachmentSupport={this.props.attachmentSupport} sendComment={this.props.sendComment} user={this.props.user}/>
      </div>
    )
  }
}

export default ChatroomComponent;
