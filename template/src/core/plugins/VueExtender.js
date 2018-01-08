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
        Vue.prototype.$packageList         = [];
        Vue.prototype.$registerPackages    = this._registerPackages;
        Vue.prototype.$initPackages        = this._initPackages;


        // method to get a registered package
        // throws an Error if package is not defined
        Vue.prototype.$getPackage = function(packName){
            if(typeof this.$packageList[packName] !== "undefined"){
                return this.$packageList[packName];
            }else{
                throw Error(`Package '${packName}' not registered`);
            }
        }

        // method to get a config value of registered package
        // throws an Error if package or config is not defined
        Vue.prototype.$getPackageConfig = function(packName, configName){
            
            var pack = Vue.prototype.$getPackage(packName);

            if(typeof pack.config[configName] !== "undefined"){
                return pack.config[configName];
            }else{
                throw Error(`Package config '${packName}/${configName}' not found`);
            }
        }
    },


    _registerPackages : function(){

        this.$options.activePackages.forEach( (pack, index) => {
            var packName = Object.keys(pack).toString();
            var packAttributes = pack[packName];

            if(typeof this.$packageList[packName] === "undefined"){
                this.$packageList[packName] = packAttributes;
            }else{
                throw Error(`Package '${packName}' already registered`);
            }
        });
    },


    _initPackages : function(){
        // no packages registered
        if(typeof this.$options.activePackages === "undefined"){ return; }

        this.$registerPackages();


        for(var packName in this.$packageList){

            var pack = this.$packageList[packName];

            // Register Routing
            if(typeof pack.routes === "object"){
                this.$router.addRoutes(pack.routes);

                // Register Routing guards
                if(typeof pack.routeGuards === "object"){
                    pack.routeGuards.forEach( (guard) => {
                        if(typeof guard !== "function"){
                            throw Error("routeGuard needs to be a function");
                        }else{
                            this.$router.beforeEach(guard);
                        }
                    })
                }
            }



            // Register multiple package stores
            if (typeof pack.store === "object" && typeof pack.store.length !== "undefined" && pack.store.length > 0){
                pack.store.forEach(( store ) => {
                    this.$store.registerModule(packName + "/" + store.name, store);
                });
            }
            // Register a Single Store
            else if(typeof pack.store === "object"){
                this.$store.registerModule(pack.store.name, pack.store);
            }

        }
    }
}


export default VueExtender;