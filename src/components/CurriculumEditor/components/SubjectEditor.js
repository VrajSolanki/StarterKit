import React, { PropTypes } from 'react'
import StatusModifier from './StatusModifier'
import classes from './SubjectEditor.scss'
import _ from 'lodash'
import Chance from 'chance';
import DownChevronIcon from './Icon_Cheveron.svg'

class SubjectEditor extends React.Component {
  render () {
    let subject = this.props.subject
    return (
      <div className={classes.subjectBox}>
        <div className={classes.subjectName}>{subject.name}<div className={classes.hr}></div>  </div>
        {subject.list.map(this.getListItem)}
      </div>
    )
  }

  getListItem = (id,key) =>{
    let comp = this.props.getNode(id);
    let that = this;
    let hasList = (_.get(comp,'list',[]).length > 0)?true:false
    let rid = chance.natural()
    let dataTarget = hasList?`#collapse${rid}`:``;
    let dataToggle = hasList?`collapse`:``;
    let divClass = hasList?classes.topicItemTitleWDropdown+' collapsed':classes.topicItemTitleWODropdown;
    let statusEditable = hasList?false:this.props.editable;
    return(
      <div key={key} className={classes.topicItem}>
        <div data-toggle={dataToggle} data-target={dataTarget} className={divClass}>
          {hasList?<img className={classes.chevronRight+" customRchevron"} src={DownChevronIcon} width={'11px'}/>:null}
          <div className={classes.topicItemTitle}>{comp.name}</div>
          <StatusModifier nodeId={id} changeStatus={that.props.changeStatus} editable={statusEditable} status={comp.status}/>
        </div>

        {hasList
          ?<div className="collapse" id={`collapse${rid}`}>{comp.list.map(that.getListSubItem)}</div>
          :null
        }
      </div>
    )
  }

  getListSubItem = (id,key,statusEditable) =>{
    let comp  = this.props.getNode(id);
    return(
      <div className={classes.subTopicItem} key={key}>
        <div className={classes.subTopicItemTitle}>{comp.name}</div>
        <StatusModifier nodeId={id} changeStatus={this.props.changeStatus} editable={this.props.editable} status={comp.status}/>
      </div>
    )
  }

}

export default SubjectEditor
