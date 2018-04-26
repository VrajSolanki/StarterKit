import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './ProfileCascade.scss'
import LinkWithTooltip from 'components/UIElements/LinkWithTooltip';

//direction required because design may be fixed left aligned or right aligned

const DIRECTIONS = ['ltr','rtl'];

export class ProfileCascade extends Component {

 
  render() {
    let returnObj = this.props.profileArray ? this.props.profileArray.map((item,key)=>{
        let customStyle = {};
        let linkStyle = {};
        if(this.props.direction == "ltr"){
                 linkStyle = {
                    left:(this.props.size-8)*(key),
                    top:`${-(this.props.size/2)}px`,
                    position:'absolute'
                 };
                 customStyle = { 
                    width:`${this.props.size}px`,
                    height:`${this.props.size}px`,
                    backgroundImage:`url('${item.url}')`,
                    zIndex:1+key,
                 }
        } else {
                linkStyle = {
                    right:(this.props.size-8)*(key+1),
                    top:`${-(this.props.size/2)}px`,
                    position:'absolute'
                 };
                 customStyle = { 
                    width:`${this.props.size}px`,
                    height:`${this.props.size}px`,
                    backgroundImage:`url('${item.url}')`,
                    zIndex:1+key,
                 }
        }
            return (
                <LinkWithTooltip key={key} linkStyles={linkStyle} tooltip={item.name} href="#"  placement='top'>
                  <div
                    style={customStyle}
                    className={classes.imageDiv}
                    >
                </div>
              </LinkWithTooltip>
            )
        

       
    }) : null
    return (
      <div className={classes.container}>
        {returnObj}
      </div>
    )
  }
}

ProfileCascade.propTypes = {
    size: PropTypes.string,
    profileArray: PropTypes.array,
    direction:PropTypes.oneOf(DIRECTIONS),
}

ProfileCascade.defaultProps = {
    size:'32',
    profileArray:[],
    direction:'ltr'
    
}

export default ProfileCascade
