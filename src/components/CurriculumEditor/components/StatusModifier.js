import React, { PropTypes } from 'react'
import classes from './StatusModifier.scss'
import _ from 'lodash'
import classNames from 'classnames/bind'
let cx = classNames.bind(classes);

let statusTextMapping = {'not-started': 'Not Started','in-progress': 'In Progress','done': 'Completed'}
let stateColors = {'not-started': '#82828c','in-progress': '#FFD200','done':'#24cca8'}



class StatusModifier extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDropdown: false
    }
  }
  onClickBadge = () =>{
    if(this.props.editable){
      this.setState({showDropdown: !this.state.showDropdown})
    }
  }
  onClickDropDownItem = (key) =>{
    this.setState({showDropdown: false});
    // console.log(key);
    this.props.changeStatus(this.props.nodeId,key);
  }
  render () {
    let props = this.props;
    let status = statusTextMapping[props.status];
    let bgColor = stateColors[props.status];
    let editable = this.props.editable;
    let displayDropdown = this.state.showDropdown?'block':'none';
    let dropDownList  = _.omit(statusTextMapping,props.status);
    let badgeClassNames = cx({activeBadge: true,editable: editable});
    return (
      <div className={classes.container}>
        <div className={badgeClassNames} onClick={this.onClickBadge} style={{color:bgColor}}>{status}</div>
        <div className={classes.dropDownDiv} style={{display:displayDropdown}}>
          { _.map(dropDownList, (val,key) => <div key={key} onClick={()=>{this.onClickDropDownItem(key)} } style={{color:stateColors[key]}} className={classes.dropDownItem}>{val}</div> ) }
        </div>
      </div>
    )

  }
}

export default StatusModifier ;
