import React, { PropTypes } from 'react'
import {Modal} from 'react-bootstrap'
import classes from './DialogueBoxWithSelect.scss'
import {Button} from 'components/UIElements'
import CancelCross from 'components/SvgImages/CancelCross'
import SelectDropdown from 'components/UIElements/SelectDropdown'
import UIButton from 'components/UIElements/UIButton'

class DialogueBoxWithSelect extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      errors:0
    }
  }
  componentWillMount = () =>{
    document.addEventListener("keydown", this.escapePress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escapePress);
  }
  escapePress = (e) => {
    let code = (e.keyCode ? e.keyCode : e.which);
    if(code == 27) {
        this.props.toggleDialogueBoxDisplay();
    }
  }
  isValid = () => {
    let errors = this.refs.selectionOption.isValid();
    return errors
  }
  errorResolve = () => {
    let errors = this.state.errors - 1;
    this.setState({errors});
    this.props.errorResolve();
  };

  render () {
    return(
      <div className={classes.container}>
        <div className={classes.modalContent}>
          <div className={classes.modalHeader}>
            <div>{this.props.modalTitle}</div>
            <div onClick={this.props.onClickClose} className={classes.cancelSvg}><CancelCross/></div>
          </div>

          <div className={classes.modalBody}>
            <SelectDropdown label={this.props.dropdownLabel} ref = 'selectionOption' name={this.props.name} value={this.props.selectedOption} editDropdownField={this.props.selectOnChange} placeholder="Select Unit"
              options={this.props.selectOptions} error={this.props.error} errorResolve={this.props.errorResolve} />
            {this.props.modalBody}
          </div>
          <div className={classes.modalFooter}>
            <div className={classes.button1Div}>
              <UIButton color='grey' size='sm' onClick={this.props.onClickClose}>{this.props.button1}</UIButton>
            </div>
            <div className={classes.buttonDiv}>
              <UIButton color='blue' size='sm' onClick={this.props.onClickOpen}>{this.props.button2}</UIButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DialogueBoxWithSelect;
