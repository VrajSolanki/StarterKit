import React from 'react';
import classes from './AppList.scss';
import appMapping from './appData.json';
import _ from 'lodash';
import AppItem from './AppItem';
// API : http://myjson.com/xwn9

class AppList extends React.Component {
  constructor(props){
    super(props);
  }
  render()
  {
    let data = appMapping;
    return(
      <div className={classes.container}>
        <div className={classes.contentHolder}>
          {_.map(data, (app,key) => <AppItem key={key} data={app}/>)}
        </div>
      </div>
    )

  }
}

export default AppList;
