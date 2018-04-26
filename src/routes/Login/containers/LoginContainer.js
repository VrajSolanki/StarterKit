import { connect } from 'react-redux'
import { authUser } from './LoginModule'

import LoginView from '../components/LoginView'

const mapActionCreators = {
  authUser
}

const mapStateToProps = (state) => {
  return({
    userLoggedIn: state.login.userLoggedIn,
    lastLoginUserType: state.login.lastLoginUserType,
  })
}

export default connect(mapStateToProps, mapActionCreators)(LoginView)
