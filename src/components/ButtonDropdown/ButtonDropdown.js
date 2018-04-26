import React from 'react';
import classes from './ButtonDropdown.scss'

class ButtonDropdown extends React.Component {
  constructor(props){
    super(props);
  }

  onClickDropDownItem = (dropdownMappingItem) =>{
    dropdownMappingItem.id_function();
    }

  render () {
    let props = this.props;
    let displayDropdown = this.props.showDropdown?'block':'none';

    let dropdown = this.props.dropdownMapping.map((dropdownMappingItem, key) =>{

      return <div key={key} onClick={()=>this.onClickDropDownItem(dropdownMappingItem)}  className={classes.dropDownItem} >
        <div className={classes.svgItemContainer}>{dropdownMappingItem.svg}</div>
        <div className={classes.optionTitle}>{dropdownMappingItem.title}</div>
    </div>
    })
    return (
      <div className={classes.container}>
        <div className={classes.dropDownDiv} style={{display:displayDropdown}}>
          { dropdown }
        </div>
      </div>
    )

  }
}

export default ButtonDropdown ;
