import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);



const DefaultRoutes = [
    // The Home Page
    {
        path:       '/',
        component:  () => import(/* webpackChunkName: "page/home" */ "../views/pages/home.vue"),
        name:       'home'
    },
    
    // The About Page
    {
        path:       '/about',
        component:  () => import(/* webpackChunkName: "page/about" */ "../views/pages/about.vue"),
        name:       'about'
    }

];


export default new VueRouter({
    routes : DefaultRoutes
});
