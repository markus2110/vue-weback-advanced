import Vue          from "vue";
import VueExtender  from "./plugins/VueExtender";

Vue.use(VueExtender);

export default Vue.extend({
    
    beforeCreate : function(){
        this.$initPackages();
    }
});