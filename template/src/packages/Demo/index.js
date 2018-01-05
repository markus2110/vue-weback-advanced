import { DemoPackageConfig } from "./config/index";
import { DemoRoutes } from "./router/index";
import { DemoStore } from "./store/DemoModule/index";


export default {
    config  : DemoPackageConfig,
    store   : DemoStore,
    routes  : DemoRoutes
};