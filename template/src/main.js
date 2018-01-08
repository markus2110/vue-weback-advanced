import VueApp       from "./core/VueCore.js";

import AppMain      from "./views/app.vue";


import DemoPackage from "packages/Demo/index";
import UserPackage from "packages/User/index";



var App = new VueApp({
    // Application wrapper
    el : '#application-wrapper',
    // The active Vue Packages
    activePackages : [ DemoPackage, UserPackage ],
    // App Template
    template : AppMain
})

// Mount the App
App.start();