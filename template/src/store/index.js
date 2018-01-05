import Vue from 'vue';
import Vuex from 'vuex';
import DemoModule from "./DemoModule/";


Vue.use(Vuex);


export default new Vuex.Store({
    strict: true,
    modules : {
        demo: DemoModule
    }
});