const state={
    users:[]
}

const getters={
    getUserList(state){
        return state.getUsers;
    },
    getUser(state){

    }
}

const mutations={ //senkron çalışır
    updateUserList(state,user){//state : elimizdeki veri , user : listeye ekleyeceğimiz yeni veri
        state.users.push(user);
    }
}

const actions={//asenkron çalışır
    saveUser({commit},user){ //producta ulaşmak için commit kullanılır.

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}