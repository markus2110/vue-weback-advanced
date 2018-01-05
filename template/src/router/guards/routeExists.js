export default function RouteExistsGuard(to, from, next){
    if(to.matched.some( (record) => true )){
        next();
    }else{
        next({name: '404'});
    }    
}
