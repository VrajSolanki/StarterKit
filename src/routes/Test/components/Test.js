import React, { Component } from 'react'
const chatIcon = "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/chat-circle-blue-512.png"
import ChatComponent from './ChatComponent'
import classes from './Test.scss'
import classNames from 'classnames'

export default class Test extends Component {

  constructor(props){
    super(props)
    this.state={
      showChatComponent: true
    }
  }

  toggleChatViewer = () => {
    this.setState({showChatComponent: !this.state.showChatComponent});
  }

  render() {
    let finalClass = classNames({[classes.hidden]:!this.state.showChatComponent},{[classes.visible]:this.state.showChatComponent});

    return (
      <div className={classes.container}>
        <div className={classes.iconContainer} onClick={this.toggleChatViewer}>
          <img className={classes.chatIcon} src={"https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/chat-circle-blue-512.png"} />
        </div>
        <div className={finalClass}>
          <ChatComponent />
        </div>
      </div>
    )
  }
}
