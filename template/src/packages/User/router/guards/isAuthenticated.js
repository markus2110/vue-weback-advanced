
var needsAuth = function(record){

    if(typeof record.meta === "undefined"){
        return false;
    }
    if(typeof record.meta.requiresAuth !== "undefined" && record.meta.requiresAuth === true){
        console.log("Auth required");
        return true;
    }
}



export default function isAuthenticatedGuard(to, from, next){

    if(to.matched.some(needsAuth)){
        next({name: 'user-login', query: { redirect: to.fullPath }});
    }else{
        next();
    }
}
