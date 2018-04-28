import React, { Component } from 'react'
import classes from './NewConversation.scss'
import _ from 'lodash'
import LeftArrow from 'components/SvgImages/LeftArrow'

export default class NewConversation extends Component {
  render() {
    const imageUrls = [
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISOPofgFneb_24u478hajFwvhY61pQxtJ9ZaCEhcMz066HBJJ", name: "User 1"},
        {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png", name: "User 2"},
        {url: "https://png.icons8.com/color/260/person-female.png", name: "User 3"},
    ]
    const images = _.map((imageUrls), item => {
        return (
            <div className={classes.nameAndProfilePic}>
                <div style={{ backgroundImage:`url('${item.url}')`,}} className={classes.profilePic} />
                <div className={classes.name}>{item.name}</div>
            </div>
        )
    })

    return (
      <div className={classes.container}>
        <div className={classes.topContainer}>
            <div className={classes.backArrowContainer}>
                <div className={classes.backArrow}><LeftArrow /></div>
            </div>
            <div className={classes.detailsContainer}>
                <div className={classes.title}>{`Intercom`}</div>
                <div className={classes.subtitle}>{`We help your business grow by connecting you to your customers.`}</div>
                <div className={classes.imageContainer}>
                    {images}
                </div>
                <div className={classes.endTitle}>{`The team typically replies in under 1h`}</div>
            </div>
        </div>

        <div className={classes.chatContainer}>
        </div>
      </div>
    )
  }
}
