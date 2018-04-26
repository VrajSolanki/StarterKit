import React from 'react';
import classes from './ClassSelector.scss';
import Dropdown from 'components/UIElements/Dropdown'

// let btnList = ['6C','7A']
export const ClassSelector = (props) => {
    let selected = {label: "", value: props.selectedClass}
    let options = props.classList.map((classroom) => {
    let classroom_id = classroom.classroom_id.toString();
    let classroom_text = classroom.grade+" "+classroom.section;
    if(classroom_id == props.selectedClass){
      selected['label'] = classroom_text;
    }
    let returnObj = { label: classroom_text ,value: classroom_id}
    return returnObj
  })
  return (
    <div className={classes.container}>
      {
        //   props.classList.map((classroom) => {
        //   let classroom_id = classroom.classroom_id.toString()
        //   let classroom_text = classroom.grade+" "+classroom.section
        //   let classname = (classroom_id == props.selectedClass)? classes.btnActive+' '+classes.btn :classes.btn;
        //   return (
        //     <div
        //       onClick={ () => {props.selectClass(classroom_id)} }
        //       className={classname}
        //       key={classroom_id}>
        //       {classroom_text}
        //     </div>
        //   )
        // })
      }
       <Dropdown className={classes.classSelectorDropdown} options={options} onClick={props.selectClass} selected={selected}/>
    </div>
  )
}
  export default ClassSelector;
