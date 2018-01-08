import Getters      from "./Getters";
import Actions      from "./Actions";
import Mutations    from "./Mutations";


export const UserStore = {

    name : "User",

    namespaced: true,

    state : {
        data: [],
    },

    getters:    Getters,
    actions:    Actions,
    mutations:  Mutations
};