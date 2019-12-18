import axios from "axios"

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
    listUser({commit},user){ //producta ulaşmak için commit kullanılır.
        var token="Bearer "+localStorage.token;
        axios.defaults.headers.common["Authorization"]=token;
        axios.get("http://localhost:56307/api/AdminUser/GetUserList")
      .then(function(response){
          console.log(response);
        let data = response.body;
        for (let item in data) {
        commit("updateUserList", item);
        }
      })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}