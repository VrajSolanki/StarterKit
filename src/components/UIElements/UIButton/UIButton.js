/* DOCUMENTATION :
   Props used :
    label -> It is the text which will be displayed inside the button
    type -> To state whether you want a filled or hollow button
    button_state ->To state whether button is normal or disabled
    color->To state the color , out of grey,pink,yellow,blue
    size-> It will decide the size of your box.It has default value small
*/
import React from 'react';
import classNames from 'classnames';
import style from './UIButton.scss';
import PropTypes from 'prop-types';


const COLOR = ['grey','pink','yellow','blue'];
const SIZES = ['lg','md','sm'];
const BUTTON_STATE = ['disabled','normal'];
const BUTTON_TYPE=['filled','hollow'];

 class UIButton extends React.Component
 {

   constructor(props){
     super(props);
     this.state={ isChecked:false};
   }

   handleClick(event) {

     let { isActive,onClick } = this.props;
     if(isActive == undefined){
       isActive = true;
     }
     if (!isActive) {
       event.stopPropagation();
       return;
     }

     if(onClick) {
       onClick(event);
     }
   }
  // onClick =(e)=> {
  //    if(this.props.button_state==='normal')
  //    {
  //      console.log('clicked')
  //    };
  // }


   render = () => {
     let label=this.props.children;
     let size=this.props.size;
     let color=this.props.color;
     let type=this.props.type;
     let button_state=this.props.isDisabled?'disabled':'normal';
     let isChecked=this.state.isChecked;
     let className = this.props.className;

     let boxclass=classNames(style[type+'_'+button_state+'_'+size+'_'+color],{[className]:className!=''});
     return(
             <div className={boxclass} onClick={(e)=>this.handleClick(e)} style={this.props.inputStyle}>
               <div className={style.label} >
                 {label}
               </div>
             </div>
           )
      }
  }

 UIButton.propTypes = {
   color: React.PropTypes.oneOf(COLOR),
   size: React.PropTypes.oneOf(SIZES),
   type: React.PropTypes.oneOf(BUTTON_TYPE),
   className:React.PropTypes.string,
   button_state:React.PropTypes.oneOf(BUTTON_STATE),
   onClick: React.PropTypes.func,
   isActive:React.PropTypes.bool
   };

  UIButton.defaultProps = {
    color:'grey',
    size:'md',
    type:'filled',
    isActive: true,
    className:'',
    isDisabled:false,
    inputStyle:{}
  };



export default UIButton;
