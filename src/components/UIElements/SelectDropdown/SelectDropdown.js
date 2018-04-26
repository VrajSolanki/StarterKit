import React, { PropTypes } from 'react'
import 'react-select/dist/react-select.css';
import Select from 'react-select';
import classes from './SelectDropdown.scss';
import classNames from 'classnames';
class SelectDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error:""}
  }
  editDropdown = (props,name) => {
    let param={};
    let value="";
    if(this.state.error!="" && this.props.errorResolve){
      this.props.errorResolve();
    }
    this.setState({error:""});
    if(props!=null){
      value=props.value;
    }
    param[name]=value;
    if(name=='grade'){
      if(props==null || props.value!=this.props.value){
        param['theme']='';
        param['area']='';
        param['module']='';
        param['objectives']={};
        param['indicators']={};
        this.props.addAreaOfDevelopmentList(_.get(props,`value`,""));
      }
    }
    if(name=='theme'){
      if(props==null || props.value!=this.props.value){
        param['module']='';
      }
    }
    this.props.editDropdownField(param);
  };

  isValid = () => {
    if(this.props.value=="" && this.props.options.length!=0){
      this.setState({error:this.props.error});
      return 1;
    }
    else{
      this.setState({error:""});
      return 0;
    }
  };

  render(){
    let selectOption = classNames({[classes.selectOption]:true},{[classes.errorBorder]:this.state.error!=""});
    const isDisabled = this.props.options.length==0 || (this.props.name=='grade' && this.props.id!=null)
    let labelClassName = isDisabled ? classes.inputLabelDisabled : classes.inputLabel
    let selectClassName = classNames({[classes.container]:true},{[classes.disabledContainer]:isDisabled},{[classes.errorContainer]:this.state.error!=""});
      return(
      <div className={selectClassName}>
        <label className={labelClassName}>{this.props.label}</label>
        <Select
          multi={false}
          options={this.props.options}
          onChange={((props)=>this.editDropdown(props,this.props.name))}
          value={ this.props.value}
          className={selectOption}
          autoBlur={true}
          placeholder={this.props.placeholder}
          disabled={isDisabled}
          clearable={false}
        />
        <span className={classes.error}>{this.state.error}</span>
      </div>
    )
  }
}
export default SelectDropdown
