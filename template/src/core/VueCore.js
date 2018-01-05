import Vue          from "vue";
import VueExtender  from "./plugins/VueExtender";
import Router       from "@/router/index.js";
import Store        from "@/store/index.js";


Vue.use(VueExtender);


export default Vue.extend({
    // Vue-Router
    router :        Router,

    // VueX
    store :         Store,
    
    beforeCreate : function(){
        this.$initPackages();
    }
});