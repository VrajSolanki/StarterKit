// import HomeView from './components/HomeView'
import { injectReducer } from '../../store/reducers'
// Sync route definition
// export default {
//   component: HomeView
// }

export default(store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const LoginContainer = require('./containers/LoginContainer').default

      const module = require('./containers/LoginModule')
      const reducer = module.default
      const key =  module.NAME
      injectReducer(store, { key, reducer })

      cb(null, LoginContainer)
    },'login')
  }
});
