import Vue      from "vue";
import store    from "@/store/";
import router   from '@/router/';

import MainView from "@/components/views/Main.vue";

new Vue({
    el: '#application-wrapper',
    store:store,
    router:router,
    // h => alias for createElement
    render: (h) => h(MainView)
});