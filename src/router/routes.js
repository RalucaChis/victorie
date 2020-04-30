
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/addRoutine',
    component: () => import('layouts/AddLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AddRoutine/AddRoutine.vue') }
    ]
  },
  {
    path: '/Control',
    component: () => import('layouts/ControlLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Control/index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
