const home    = function(){ return import(/* webpackChunkName: "page/home" */ "@/components/pages/home.vue") };
const about   = function(){ return import(/* webpackChunkName: "page/about" */ "@/components/pages/about.vue") };
const page1   = function(){ return import(/* webpackChunkName: "page/page1" */ "@/components/pages/page1.vue") };

export const routes = [
    { path: '/', component: home, name: 'home' },
    { path: '/about', component: about, name: 'about' },
    { path: '/page1', component: page1, name: 'page1' }
];