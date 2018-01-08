import { UserPackageConfig } from "./config/index";
import { UserRoutes } from "./router/index";
import isAuthenticatedGuard from "./router/guards/isAuthenticated";



export default {
    "UserPackage" : {
        config :        UserPackageConfig,
        //store   : [ DemoStore, LoremStore ],
        routes :        UserRoutes,
        routeGuards :   [isAuthenticatedGuard]
    }
};