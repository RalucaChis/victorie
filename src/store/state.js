// This exports a function since nuxt.js expects a function
// to be returned instead of objects
export default () => {
  return {
    authenticated: false,
    username: null,
    password: null,
    routines: [
      {
        name: 'Detect Dog and close doors',
        created_at: new Date('2020-01-01T20:00:01').toGMTString(),
        updated_at: new Date('2020-01-02T16:21:01').toGMTString(),
        status: 'active'
      },
      {
        name: 'Email me when Microsoft stock is worth buying',
        created_at: new Date('2020-03-01T20:00:01').toGMTString(),
        updated_at: new Date('2020-03-01T11:44:35').toGMTString(),
        status: 'inactive'
      },
      {
        name: 'Turn on heating system after 16pm ',
        created_at: new Date('2020-02-01T16:00:01').toGMTString(),
        updated_at: new Date('2020-02-02T19:21:01').toGMTString(),
        status: 'active'
      }
    ],
    available_ui_components: {}
  }
}
