// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import LoginRoute from './Login'
import TestRoute from './Test'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: TestRoute(store),
  // indexRoute: LoginRoute(store),
  childRoutes: [
    TestRoute(store)
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store),
          require(./Parent).default
        ])
      })
    }
/*
    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
