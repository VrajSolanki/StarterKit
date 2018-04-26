import React from 'react'
import classes from './LoginView.scss'
// import GoogleLogin from 'react-google-login';
import GoogleLogin from 'components/GoogleLoginBtn';
// import { browserHistory } from 'react-router'
// import { push } from 'react-router-redux';
import {LOGIN_IMAGES_LIST} from 'store/static'


class LoginView extends React.Component {

  constructor(props){
    super(props);
  }
  doTransition = (userType) =>{
    if(userType == 'student'){
      this.context.router.push('/parent/insights');
    }
    else if (userType === 'teal_user'){
      this.context.router.push('/admin');
    }
    else if (userType ==='todden_teacher') {
      this.context.router.push('/todden');
    }
    else{
      this.context.router.push('/teacher/classes');
    }
  }
  responseGoogle = (data)=>{
    let that = this
    console.log('Sending token to server');
    let id_token = data.Zi.id_token;
    this.props.authUser({id_token:id_token}).then(()=>{
      console.log('Done Loggin In');
      if(that.props.userLoggedIn){
        that.doTransition(that.props.lastLoginUserType)
      }
    })
  }
  componentWillReceiveProps(newProps){
    console.log(newProps.userLoggedIn,newProps.lastLoginUserType);
    if(newProps.userLoggedIn){
      this.doTransition(newProps.lastLoginUserType)
    }
  }
  getRandomArrayPosition = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  render(){
    const randomPosition = this.getRandomArrayPosition(0,2);
    const imgSrc = LOGIN_IMAGES_LIST[randomPosition];
    return(
      <div className={classes.container}>
        <div className={classes.aside1}>
          <img src={imgSrc} className={classes.imageContainer}/>
          {/* <div>Ahmedabad International School</div> */}
        </div>
        <div className={classes.aside2}>
          <div className={classes.aisLogo}><ToddenSvg /></div>
          <div className={classes.quoteAndName}>
            <div className={classes.quote}>
              “If you're not prepared to be wrong, you'll never come up with anything original.”
            </div>
            <div className={classes.authorName}>― Ken Robinson</div>
          </div>
          <div className={classes.loginContainer}>
            <GoogleLogin
              className={classes.googleBtn}
              clientId="328967318361-jutd87l49b97g76d2kareu14tqtjp00d.apps.googleusercontent.com"
              onSuccess={this.responseGoogle}
              onFailure={res=>console.log(res)}
              prompt="select_account">Login with Google</GoogleLogin>
          </div>
          <div className={classes.tealLabs}>Powered by Teal-Labs</div>
        </div>
      </div>
    )
  }
}

LoginView.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LoginView
