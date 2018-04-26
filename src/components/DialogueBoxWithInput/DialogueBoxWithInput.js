import React, { PropTypes } from 'react'
import {Modal} from 'react-bootstrap'
import classes from './DialogueBoxWithInput.scss'
import Button from 'components/UIElements/Button'
import UIButton from 'components/UIElements/UIButton'

class DialogueBoxWithInput extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      showModal: this.props.showModal
    }
}

  delete = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // this.props.deleteHomework(this.props.hwid);
    // this.props.toggleDilogueBoxDisplay();
    // this.setState({showModal: false});
  }

  onClickButton2 = () => {
    let gradeValue = this.refs.grade.value;
    let unitValue = this.refs.unit.value;
    const gradeObjectToUpdate = {
      type: 'grade',
      textValue: gradeValue
    }
    const unitObjectToUpdate = {
      type: 'unit',
      textValue: unitValue
    }
    this.props.onClickButton2(gradeObjectToUpdate);
    this.props.onClickButton2(unitObjectToUpdate);
    this.props.toggleDialogueBoxDisplay(false);
    //this.props.navigateToCreateCurriculum();
  }

  close = () => {
    this.setState({ showModal: false });
    this.props.toggleDialogueBoxDisplay(false);
 }

 open = () => {
   console.log('opening');
   this.setState({ showModal: true });
 }

  render () {
    let inputBoxComponent = this.props.inputElements.map((inputElement, key)=>{
      return (
        <div key={key} className={classes.inputElement}>
          <div className={classes.inputElementText}>
            {inputElement}
          </div>
          <div>
            <input type='text' className={classes.inputBoxStyle} ref= {inputElement.toLowerCase()} placeholder={'Enter'+' '+inputElement}/>
          </div>
        </div>
      )
    })

    return(
     <div className={classes.container}>
       <div className={classes.modalContent}>
         <div className={classes.modalHeader}>
           <div>{this.props.modalTitle}</div>
         </div>

         <div className={classes.modalBody}>
           {inputBoxComponent}
         </div>

         <div className={classes.modalFooter}>
           <div className={classes.button1Div}>
             <UIButton color='grey' size='sm' onClick={this.close}>{this.props.button1}</UIButton>
           </div>
           <div className={classes.buttonDiv}>
             <UIButton color='blue' size='sm' onClick={this.onClickButton2}>{this.props.button2}</UIButton>
           </div>
         </div>
       </div>
     </div>
    )
  }
}

export default DialogueBoxWithInput;
