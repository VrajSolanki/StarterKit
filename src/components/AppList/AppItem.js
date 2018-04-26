import React, { PropTypes } from 'react';
import classes from './AppList.scss';

const AppItem = (props) => {
  let data = props.data;
  let onItemClick = () => { window.open(data.app_link);}

  return(
    <div className={classes.appItemcontainer} >
      <div className={classes.AppInfo} onClick={onItemClick}>
        <img className={classes.AppIcon} src={data.app_icon} width="100" height="100"/>
      </div>
      <div className={classes.AppDescription}>
        <div className={classes.AppName}>{data.app_name}</div>
        <div className={classes.AppCategory}>{data.category}</div>
        <div className={classes.descriptionText} dangerouslySetInnerHTML={{__html:data.description.replace(/(?:\r\n|\r|\n)/g, '<br />')}}></div>
      </div>

    </div>
  )
}

export default AppItem
