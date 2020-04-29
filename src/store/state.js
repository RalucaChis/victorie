// This exports a function since nuxt.js expects a function
// to be returned instead of objects
export default () => {
  return {
    authenticated: false,
    username: null,
    password: null,
    routines: [],
    available_ui_components: {}
  }
}
