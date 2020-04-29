export default {
  logged_in (store) {
    store.authenticated = true
  },

  set_credentials (store, { username, password }) {
    store.username = username
    store.password = password
  },

  set_routines (store, routines) {
    store.routines = routines
  },

  // eslint-disable-next-line camelcase,no-return-assign
  setAvailableUiComponents: (state, available_ui_components) => state.available_ui_components = available_ui_components

}
