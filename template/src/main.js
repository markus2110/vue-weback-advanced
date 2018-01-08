import VueApp       from "./core/VueCore.js";

import AppMain      from "./views/app.vue";


import DemoPackage from "packages/Demo/index";
import UserPackage from "packages/User/index";



var App = new VueApp({
    // The active Vue Packages
    activePackages : [ DemoPackage, UserPackage ],
    // h = alias for createElement
    render :        (h) => h(AppMain)
})

// Mount the App
App.$mount('#application-wrapper');