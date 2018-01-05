const VueExtender =  {

    options : {
        packages : []
    },

    install : function (Vue, options){

        this._mergeOptions(options);
        this._extendVuePrototype(Vue);
    },


    _mergeOptions : function(options){
        Object.assign(this.options, options);
    },

    _extendVuePrototype : function(Vue){

        Vue.prototype.$packageList = [];
        Vue.prototype.$registerPackages = function(packages){
            Vue.prototype.$packageList = packages;
        };

        Vue.prototype.$initPackages = this._initPackages;
    },


    _initPackages : function(){

        this.$registerPackages(this.$options.activePackages);

        this.$packageList.forEach( ( pack ) => {

            // Register Routing
            if(typeof pack.routes === "object"){
                this.$router.addRoutes(pack.routes);
            }

            // Register Store
            if(typeof pack.store === "object"){
                this.$store.registerModule(pack.store.name, pack.store);
            }

        });
    }
}


export default VueExtender;