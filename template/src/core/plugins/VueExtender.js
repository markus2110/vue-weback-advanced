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
        // no packages registered
        if(typeof this.$options.activePackages === "undefined"){ return; }

        this.$registerPackages(this.$options.activePackages);

        this.$packageList.forEach( ( pack ) => {

            // Register Routing
            if(typeof pack.routes === "object"){
                this.$router.addRoutes(pack.routes);
            }


            // Register multiple package stores
            if (typeof pack.store === "object" && typeof pack.store.length !== "undefined" && pack.store.length > 0){
                pack.store.forEach(( store ) => {
                    this.$store.registerModule(store.name, store);
                });
            }
            // Register a Single Store
            else if(typeof pack.store === "object"){
                this.$store.registerModule(pack.store.name, pack.store);
            }

        });
    }
}


export default VueExtender;