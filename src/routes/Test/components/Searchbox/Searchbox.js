import React, { Component } from 'react'
import classes from './Searchbox.scss'
import InputTextField from 'components/UIElements/InputTextField'
import RightArrow from 'components/SvgImages/RightArrow'

const styles = {
    textAreaStyles: {
        display: "flex",
        backgroundColor: '#F0F0F3',
        border: '1px solid #CDCDD2',
        borderTopLeftRadius: "4px",
        borderBottomLeftRadius: "4px",
        padding: "9px 16px"
    }
}   
export default class Searchbox extends Component {

    constructor(props){
        super(props)
        this.state={
            value: ""
        }
    }

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.search}>
        <InputTextField 
            value={this.state.value}
            editTextField={this.editTextField}
            name={this.props.name}
            placeholder={this.props.placeholder}
            inputStyle={styles.textAreaStyles}/>
        </div>
        <div className={classes.goIcon}><div className={classes.svgContainer}><RightArrow fill={"#fff"}/></div></div>
      </div>
    )
  }
}
