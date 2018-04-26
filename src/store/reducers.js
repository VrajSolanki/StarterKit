import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import loginReducer from 'routes/Login/containers/LoginModule'
import servicesReducer from 'modules/Services'
import { loadingBarReducer } from 'react-redux-loading-bar'
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
      loadingBar: loadingBarReducer,
    'login':loginReducer,
    'app_services': servicesReducer,
    ...asyncReducers
  })
}
export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}
export default makeRootReducer
