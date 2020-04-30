// This exports a function since nuxt.js expects a function
// to be returned instead of objects
export default () => {
  return {
    authenticated: false,
    username: null,
    password: null,
    routines: [
      {
        name: 'Microsoft Stock Price and EUR to RON conversion',
        created_at: '2020-04-16T18:14:17.204066Z',
        updated_at: '2020-04-29T07:34:43.510500Z',
        status: 'standby'
      },
      {
        name: 'Jokes',
        created_at: '2020-04-16T20:17:29.260002Z',
        updated_at: '2020-04-30T17:00:02.907170Z',
        status: 'standby'
      },
      {
        name: 'Text me when bitcoin drops',
        created_at: '2020-04-30T07:13:50.250078Z',
        updated_at: '2020-04-30T07:13:50.250114Z',
        status: 'standby'
      },
      {
        name: 'Home surveillance',
        created_at: '2020-04-27T15:30:26.336439Z',
        updated_at: '2020-04-27T15:30:26.336474Z',
        status: 'standby'
      },
      {
        name: 'Stock price chasing',
        created_at: '2020-03-27T15:30:26.336439Z',
        updated_at: '2020-03-27T15:30:26.336474Z',
        status: 'standby'
      }
    ],
    available_ui_components: {}
  }
}
