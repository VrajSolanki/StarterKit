var React = require('react');
var blacklist = require('blacklist');
var classNames = require('classnames');
import style from './FormField.scss'

const FIELD_SIZES = ['lg', 'md','sm', 'xs'];

const FIELD_TYPES = [
  'normal',
  'capsule',
  'normal-dark'
];

const INPUT_TYPE = [
  'text',
  'number',
  'tel',
  'email',
  'search',
  'url'
]

const FormField = module.exports =  (props) => {
  let fieldTypeClass = 'field--' + props.fieldType;
  let fieldSizeClass = 'field--' + props.size;
  let labelSizeClass = 'label--' + props.size;
  let labelTypeClass = 'label--' + props.fieldType;



  let passingProps = blacklist(props, 'isActive', 'fieldType','inputType','size', 'className', 'isError','id','label','errorMsg');
  let componentFieldClass = classNames(
    style.field,
    style[fieldTypeClass],
    style[fieldSizeClass],
    (props.isError ? style['field-error'] : null ),
    (props.isActive ? null : style['field-inactive']),
    props.className
  );

  let componentLabelClass = classNames(
    style[labelSizeClass],
    style[labelTypeClass],
    (props.isActive ? null : style['label-inactive']),
  );


  passingProps.className = componentFieldClass;
  passingProps.type = props.type;
  passingProps.id = props.id;
  // console.log("class");

  let renderFormComponent;

  if(!props.isError){

      renderFormComponent = (
        <label htmlFor={props.id} className={componentLabelClass}>{props.label}
          <input {...passingProps} disabled={!props.isActive}>{props.children}</input>

        </label>
      )

  } else {
    if(props.hasOwnProperty("errorMsg")){
      renderFormComponent =(
        <div>
          <label htmlFor={props.id} className={componentLabelClass}>{props.label}
            <input {...passingProps}>{props.children}</input>
          </label>
          <p className={style['errorMsg']}>{props.errorMsg}</p>
        </div>
      )
    } else {
      renderFormComponent =(
        <div>
          <label htmlFor={props.id} className={componentLabelClass}>{props.label}
            <input {...passingProps}>{props.children}</input>
          </label>
        </div>
      )
    }

  }

  return(
    <div>
      {renderFormComponent}
    </div>
)}

FormField.propTypes = {
  size: React.PropTypes.oneOf(FIELD_SIZES),
  fieldType:React.PropTypes.oneOf(FIELD_TYPES),
  inputType:React.PropTypes.oneOf(INPUT_TYPE),
  className: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  isError: React.PropTypes.bool,
  label:React.PropTypes.string,
  id:React.PropTypes.string,
  errorMsg:React.PropTypes.string
};


FormField.defaultProps = {
  size: 'md',
  fieldType: 'normal',
  inputType:'text',
  isError:false,
  isActive:true
};

export default FormField
