

export default {

  name: 'auth',
  component: () => import( /* webpackChunkName: "auth" */ '../layout/AuthLayout.vue'),
  children: [
    {
      path: '',
      name: 'login',
      component: () => import( /* webpackChunkName: "login" */ '../pages/LoginPage.vue')
    },
    {
      path: 'register',
      name: 'register',
      component: () => import( /* webpackChunkName: "register" */ '../pages/RegisterPage.vue')
    }
  ]

}