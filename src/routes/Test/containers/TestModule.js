import request from 'superagent';
import {NEW_SERVER_URL} from 'store/static'
import { push } from 'react-router-redux';
import update from 'immutability-helper';

// ------------------------------------
// Constants
// ------------------------------------
export const NAME = 'test';

//export const SAVE_TEACHER_INFO = 'SAVE_TEACHER_INFO' + " " + NAME
export const CHANGE_DRAWER_STATE = 'CHANGE_DRAWER_STATE' + " " + NAME

//PURE ACTIONS

export const setActivityConstantsLoader = (data) => {
  return { type:SET_GET_CONSTANTS_LOADER, payload:data }
};


export const navigateToActivity = () => {
  return (dispatch, getState) => {
    dispatch(push(`/todden/activity`));
  }
};


export const toggleDrawer = () =>{
  return (dispatch, getState) => {
    return new Promise(function(resolve, reject) {
      let currentDrawerState = getState().todden.isDrawerOpen;
      dispatch({ type: CHANGE_DRAWER_STATE, payload: !currentDrawerState})
    });
  }
};


export const getSystemConstants = () => { // Thunk
  return (dispatch, getState) => {
    return new Promise( resolve => {
      dispatch(setActivityConstantsLoader(true));
      request
        .get(`${NEW_SERVER_URL}/activity/admin/constants/get`)
        .end(function(err, res){
          if(!err){
            dispatch(getSystemConstantsSuccess(res.body.constants_data));
            dispatch(getClasses());
            resolve();
          }
        });
    })
  }
};



export const getClasses = () => {
  return (dispatch, getState) => {
    let teacher_id = getState().login.todden_teacher.user_id;
    return new Promise( resolve => {
      dispatch(setActivityConstantsLoader(true));
      request
        .post(`${NEW_SERVER_URL}/activity/teacher/class/get`)
        .send({teacher_id})
        .end(function(err, res){
          if(!err){
            // dispatch(setClasses(class_data));
            resolve();
          }
        });
    })
  }
};

const REDUCER_HANDLERS = {
  [CHANGE_DRAWER_STATE]: (state,action) => {
    return Object.assign({}, state , {isDrawerOpen : action.payload});
  },
  
};

const initialState = {
  isDrawerOpen: false
};

export default function myReducer (state = initialState, action) {
  const handler = REDUCER_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
