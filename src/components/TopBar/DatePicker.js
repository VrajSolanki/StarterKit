import React from 'react';
import classes from './DatePicker.scss';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
class DatePicker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ranges: {
				// 'Today': [moment(), moment()],
				// 'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				// 'This Month': [moment().startOf('month'), moment().endOf('month')],
				'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			},
			startDate: props.dateFilter.startDate,
			endDate: props.dateFilter.endDate
    }
  }
  handleEvent = (e,picker)=>{
    if(e.type == 'apply'){
      let x = { startDate: picker.startDate, endDate: picker.endDate };
      this.setState(x);
      this.props.onDateFilterChange(x);
    }
  }
  render() {
    let startDate = this.state.startDate;
    let endDate = this.state.endDate;
    let ranges = this.state.ranges;
    let start = this.state.startDate.format('Do MMM, YY');
		let end = this.state.endDate.format('Do MMM, YY');
		let label = start + ' - ' + end;
    return (
      <div className={classes.container}>
          <DateRangePicker ranges={ranges} startDate={startDate} endDate={endDate} onEvent={this.handleEvent}>
              {label} <span className="caret"></span>
          </DateRangePicker>
      </div>
      )
    }
  }

  export default DatePicker;
