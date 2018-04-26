import React from 'react';
import classes from './index.scss';
// import DatePicker from './DatePicker'
// var FaRefresh = require('react-icons/lib/fa/refresh');


const TopBar = ({title}) => {
  return (
    <div className={classes.container}>
      <div style={{padding:'0 32px'}}>
          {title}
      </div>
    </div>
  )
}

export default TopBar

  // <div style={{padding:'0 32px',flexFlow:'row',display:'flex'}}>
  //   <button className={classes.refreshBtn+' btn btn-default'}  onClick={onRefreshData}><FaRefresh/></button>
  //   <DatePicker dateFilter={dateFilter} onDateFilterChange={onDateFilterChange}/>
  // </div>


// <span className={classes.profileName}>Nikhil Poonawala</span><img className={classes.profileImg} src="https://lh3.googleusercontent.com/-ztjXM3Neldo/AAAAAAAAAAI/AAAAAAAAAoE/2VMqpNnBil4/s50-c/photo.jpg"/>
