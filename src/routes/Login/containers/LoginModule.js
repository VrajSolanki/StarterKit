import request from 'superagent';
import {SERVER_URL} from 'store/static'
import {NEW_SERVER_URL} from 'store/static'
import {push} from 'react-router-redux'
// Constants
export const NAME = 'login'
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS' + ' ' + NAME
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS' + ' ' + NAME

export const AUTH_URL = `${NEW_SERVER_URL}/activity/auth/googlesignin`;
// export const AUTH_URL = "http://10.0.5.18:3000/auth/googlesignin";

// Actions Creator
export function authUserSuccess(data){
  return{
    type: AUTH_USER_SUCCESS,
    payload: data
  }
}
export function logoutUserSuccess(data){
  return{
    type: LOGOUT_USER_SUCCESS,
    payload: data
  }
}

// THUNKS
export const logoutUser = () =>{
  return(dispatch,getState) =>{
    console.log("sns");
    return new Promise(resolve => {
      _deleteJWT()
      dispatch(logoutUserSuccess())
      dispatch(push('/'))
    })
  }
}

export const checkUserAuth = (userType) =>{
  return (dispatch, getState) => {
    return new Promise(resolve => {
      let jwt = _getJWT();
      if (jwt){
        console.log('Stored JWT Found .. Checking Validity of token with server');
        // Server => User From Token => UserObj
        // If validated
        //   -> setjwt
        //   -> dispatch(authUserSuccess(UserObj));
        //   -> get latest state
        //   -> Check userType with login
        //   -> if resolve('Auth') else resolve('UnAuth')
        // Else resolve('UnAuth')

        request
        .post(`${NEW_SERVER_URL}/activity/auth/userFromToken`)
        .send({ token: jwt})
        .end(function(err, res){
          if(!err){
            // console.log(res);
            _setJWT(res.body.token);
            dispatch(authUserSuccess(res.body));

            const updatedState = getState();
            if(updatedState.login.roles.includes(userType)){
                console.log('Match : Required component role',userType,' found in User roles',updatedState.login.roles)
                resolve('Auth')
            }
            else{
                console.log('Dint Match :: ComponentRole:',userType,' and User Roles:',updatedState.login.roles);
                resolve('UnAuth')
            }

          }
          else{
            // Invalid Token - Probably expired
            console.log(err);
            resolve('UnAuth')
          }
        });

      }else{
        console.log('No JWT Found');
        resolve('UnAuth');
      }
    });
  }
}

export const authUser = (params) => {
  // console.log(params);
  let id_token = params.id_token;
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      request
      .get(AUTH_URL)
      .query({ id_token: id_token})
      .end(function(err, res){
        if(!err){
          // console.log(res);
          _setJWT(res.body.token);          //Store jwt
          dispatch(authUserSuccess(res.body));      //Add User obj to Store
          resolve();
        }
      });

    });
  }
}


// Helper Functions
const _getJWT = () =>{
  return localStorage.jwToken || null
}
const _setJWT = (value) => {
  localStorage.jwToken = value
}
const _deleteJWT = (value) => {
  localStorage.removeItem('jwToken')
}

// Reducers
const REDUCER_HANDLERS = {
  [AUTH_USER_SUCCESS]: (state,action) => {
    let inData = action.payload;
    //console.log(inData);
    if(inData.user_type == 'todden_teacher'){
      let newState = Object.assign({}, state , {
        [inData.user_type]: { user_id: inData.user_id.toString(), fname: inData.first_name, lname: inData.last_name, img: inData.profile_image, grades: inData.grades, isAdmin: inData.is_admin},
        userLoggedIn: true,
        lastLoginUserType: inData.user_type,
        roles: inData.roles
      });
      return newState;
    }
    else{
      let newState = Object.assign({}, state , {
        [inData.user_type]: { user_id: inData.user_id.toString(), fname: inData.first_name, lname: inData.last_name, img: inData.profile_image},
        userLoggedIn: true,
        lastLoginUserType: inData.user_type,
        roles: inData.roles
      });
      return newState;
    }
  },
  [LOGOUT_USER_SUCCESS]: (state,action) => {
    let newState = Object.assign({}, state , {
      userLoggedIn: false
    });
    return newState;
  },
}



// Export Reducer
const initialState = {
  student: {
    user_id: '103',
    fname: 'AIS',
    lname: 'Student',
    img: 'https://lh3.googleusercontent.com/-ztjXM3Neldo/AAAAAAAAAAI/AAAAAAAAAoE/2VMqpNnBil4/s50-c/photo.jpg'
  },
  teacher:{
    user_id: '409',
    fname: 'AIS',
    lname: 'Teacher',
    img: 'https://lh3.googleusercontent.com/-ztjXM3Neldo/AAAAAAAAAAI/AAAAAAAAAoE/2VMqpNnBil4/s50-c/photo.jpg'
  },
  todden_teacher:{
    user_id:'1',
    img:"https://lh4.googleusercontent.com/-Ei00ixj127U/AAAAAAAAAAI/AAAAAAAAAAs/GMhAfVxFwRM/s96-c/photo.jpg",
    fname:'Teacher',
    lname:'Super'
  },
  userLoggedIn: false,
  lastLoginUserType:'student',
  roles:[]
}

export default function myReducer (state = initialState, action) {
  const handler = REDUCER_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
