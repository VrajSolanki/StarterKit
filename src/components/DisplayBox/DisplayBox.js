import React, { PropTypes } from 'react'
import classes from './DisplayBox.scss'
import moment from 'moment';
import FaPencil from 'react-icons/lib/fa/pencil';
import AddSimpleSvg from 'components/SvgImages/AddSimpleSvg';
import CancelSvg from 'components/SvgImages/CancelSvg';
import EditSvg from 'components/SvgImages/EditSvg';

class DisplayBox extends React.Component {

    onClickAddEvent = (e) => {
        e.stopPropagation();
        this.props.onClickAddEvent();
    };

    onClickEditEvent = (e,event) => {
        e.stopPropagation();
        this.props.onClickEditEvent(event);
    };

    onClickDeleteEvent = (e,id) => {
      e.stopPropagation();
      this.props.onClickDeleteEvent(id);
    };

  render () {
    let eventsObj = this.props.data.events.map((event, key) => {
      const start_date = event.start_date;
      const end_date = event.end_date;
      let string = ''
      if(moment(start_date).isSame(moment(end_date))){ string = `${moment(event.start_date).format('D MMM')}`}
      else{ string = `${moment(event.start_date).format('D MMM')} - ${moment(event.end_date).format('D MMM')}`}

      return(
        <div key={key} className={classes.row}>
          <div className={classes.label}>{event.name}</div>
          <div className={classes.dateAndEdit}>
            <div className={classes.dateString}>{`${string} (${event.day_string})`}</div>
              {this.props.showEdit?<div className={classes.editSvg} onClick={(e) => this.onClickEditEvent(e,event)}><EditSvg/></div>:null}
              {this.props.showDelete?<div className={classes.deleteSvg} onClick={(e) => this.onClickDeleteEvent(e,event.id)}><CancelSvg /></div>:null}
          </div>
        </div>
      )
    })

    return(
      <div className={classes.container}>
        <div className={classes.header}>
            <div className={classes.headerDetails}>
            {this.props.data.count} Events
            </div>
            {this.props.showAdd?<div className={classes.addSvg} onClick={(e) => this.onClickAddEvent(e)}><AddSimpleSvg /></div>:null}
        </div>
        <hr className={classes.hr} />
        <div className={classes.eventsContainer}>
          <div className={classes.events}>{eventsObj}</div>
        </div>
      </div>
    )
  }
}

export default DisplayBox;
