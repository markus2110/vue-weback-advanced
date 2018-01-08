const Login      = function(){ return import(/* webpackChunkName: "user/login" */ "../views/Login.vue") };

export const UserRoutes = [
    { path: '/user/login',  component: Login,   name: 'user-login'}
];