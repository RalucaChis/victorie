import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    state,
    getters,
    mutations,
    actions,
    strict: process.env.DEV
  })

  // if (process.env.DEV && module.hot) {
  //   module.hot.accept(['./module-example'], () => {
  //     const newExample = require('./module-example').default
  //     Store.hotUpdate({ modules: { example: newExample } })
  //   })
  // }

  return Store
}
