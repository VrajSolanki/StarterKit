import React from 'react';
import classes from './Date.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import classNames from 'classnames';
class Date extends React.Component {

  constructor(props){
    super(props);
    this.state = {error:""}
  }

  handleDateChange = (value,name) => {
    let param = {};
    param[name]=moment(value).format('YYYY-MM-DD');
    this.props.editDateField(param);
    if(this.state.error!=""){
      //this.props.errorResolve();
      this.setState({error:""});
    }
  };

  isValid = () => {
    if(this.props.value==null || this.props.value==""){
      this.setState({error:this.props.error});
      return false;
    }
    else{
      this.setState({error:""});
      return true;
    }
  };

  render(){
    let selectClassName = classNames({[classes.container]:true},{[classes.disabledContainer]:this.props.isDisabled},{[classes.errorContainer]:this.state.error!=""});
    let labelClassName = this.props.isDisabled ? classes.inputLabelDisabled : classes.inputLabel
    return(
      <div className={selectClassName}>
          <span className={labelClassName}>{this.props.label}</span><br/>
          {this.props.maxDate?(<DatePicker  dateFormat="Do MMMM"
                       selected={moment(this.props.value)}
                       onChange={(props) => this.handleDateChange(props,this.props.name)}
                       className={classes.dateSelected}
                       disabled={this.props.isDisabled}
                       minDate={this.props.minDate?moment(this.props.minDate):moment()}
                       maxDate={moment(this.props.maxDate)}/>):
                        (<DatePicker  dateFormat="Do MMMM"
                                     selected={moment(this.props.value)}
                                     onChange={(props) => this.handleDateChange(props,this.props.name)}
                                     className={classes.dateSelected}
                                     disabled={this.props.isDisabled}
                                     minDate={this.props.minDate?moment(this.props.minDate):moment()}
                                      />)
              }

          <span className={classes.error}>{this.state.error}</span>
      </div>
    )
  }
}
export default Date;
