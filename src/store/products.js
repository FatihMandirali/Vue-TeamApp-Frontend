import axios from "axios"
import { responseMsg } from "./responseFunc/responseType"
import { router } from "../component/router";
const state = {
  users: [],
  user: {},
  words: [],
  word: {},
  subjects:[],
  subject:{}
}

const getters = {
  getUserList(state) {
    return state.users;
  },
  getUser(state) {
    return state.user
  },

  getWordList(state) {
    return state.words;
  },
  getWord(state) {
    return state.word
  },
  getSubjectList(state) {
    return state.subjects;
  },
  getSubject(state) {
    return state.subject;
  },
}

const mutations = { //senkron çalışır
  updateUserList(state) {//state : elimizdeki veri , user : listeye ekleyeceğimiz yeni veri
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.get("http://localhost:56307/api/AdminUser/GetUserList")
      .then(function (response) {
        responseMsg(response);
        if (response.data.processStatus.code == 200) {
          state.users=[];
          response.data.data.forEach(element => {
            state.users.push(element);
          });
        }
      })

  },
  getUser(state, userName) {
    //alert(userName);
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.post("http://localhost:56307/api/AdminUser/GetUser", { userName: userName })
      .then(function (response) {
        // console.log(response.data.data);
        state.user = response.data.data;
      })
  },
  deleteUser(state, userName) {
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.post("http://localhost:56307/api/AdminUser/PostDeleteUser", { userName: userName })
      .then(function (response) {
        responseMsg(response);
        if (response.data.processStatus.code == 200) {
          for (var i = 0; i < state.users.length; i++) {
            if (state.users[i].userName === userName) {
              state.users.splice(i, 1);
            }
          }
        }
      })
  },
  GetWordList(state) {
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.get("http://localhost:56307/api/AdminWord/ListWord")
      .then(function (response) {
        responseMsg(response);
        if (response.data.processStatus.code == 200) {
          console.log(response);
          state.words=[];
          response.data.data.forEach(element => {
            state.words.push(element);
          });
        }
      })
  },
  GetSubjectList(state) {
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.get("http://localhost:56307/api/AdminSubject/SubjectList")
      .then(function (response) {
        responseMsg(response);
        if (response.data.processStatus.code == 200) {
          console.log(response);
          state.subjects=[];
          response.data.data.forEach(element => {
            state.subjects.push(element);
          });

        }
      })
      console.log(state.subjects);
  },
  deleteWord(state, id) {
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.post("http://localhost:56307/api/AdminWord/DeleteWord", { id: id, word: "sdf" })
      .then(function (response) {
        console.log(response)
        location.reload();
      })
  },
  deleteSubject(state, id) {
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.post("http://localhost:56307/api/AdminSubject/DeleteSubject", { id: id })
      .then(function (response) {
        console.log(response)
        location.reload();
      })
  },
  getWord(state, id) {
    //alert(userName);
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.post("http://localhost:56307/api/AdminWord/GetWord", { id: id })
      .then(function (response) {
        console.log(response.data.data.result.wordDetail);
        state.word = response.data.data.result.wordDetail;
      })
  },
  getSubject(state, id) {
    //alert(userName);
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.post("http://localhost:56307/api/AdminSubject/Subject", { id: id })
      .then(function (response) {
        console.log(response);
        state.subject = response.data.data.subject;
      })
  },
}

const actions = {//asenkron çalışır
  listUser({ commit }, user) { //producta ulaşmak için commit kullanılır.

  },
  createUser({ commit }, user) {
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.post("http://localhost:56307/api/AdminUser/PostCreateUser", { userName: user.userName, password: user.password, teamName: user.teamId })
      .then(function (response) {
        responseMsg(response);
        if (response.data.processStatus.code == 200) {
          router.replace('/kullanicilar');
        }

      })
  },
  createWord({ commit }, word) {
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.post("http://localhost:56307/api/AdminWord/CreateWord", { word: word.wordDetail })
      .then(function (response) {
        responseMsg(response);
        console.log(response)
        console.log(response.data.processStatus)
        if (response.data.processStatus.code == 200) {
          alert("Söz ekleme işlemi başarılı.")
          router.replace('/sozler');
        }

      })
  },
  createSubject({ commit }, subject) {
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.post("http://localhost:56307/api/AdminSubject/CreateSubject", { subject: subject.subject })
      .then(function (response) {
      //  responseMsg(response);
        console.log(response)
        console.log(response.data.processStatus)
        if (response.data.processStatus.code == 200) {
          alert("Konu ekleme işlemi başarılı.")
          router.replace('/konular');
        }

      })
  },
  updateUser({ commit }, user) {
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.post("http://localhost:56307/api/AdminUser/PostUpdateUser", { oldUserName: user.oldUserName, userName: user.userName, password: user.password, teamName: user.teamId })
      .then(function (response) {
        responseMsg(response);
        if (response.data.processStatus.code == 200) {
          router.replace('/kullanicilar');
        }

      })
  },
  updateWord({ commit }, word) {
    console.log(word)
    console.log("gelen söz")
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.post("http://localhost:56307/api/AdminWord/UpdateWord", { id: word.id, word:word.word })
      .then(function (response) {
        console.log(response)
        responseMsg(response);
        if (response.data.processStatus.code == 200) {
          router.replace('/sozler');
        }

      })
  },
  updateSubject({ commit }, subject) {
    var token = "Bearer " + localStorage.token;
    axios.defaults.headers.common["Authorization"] = token;
    axios.post("http://localhost:56307/api/AdminSubject/UpdateSubject", { id: subject.id, subject:subject.subject })
      .then(function (response) {
        console.log(response)
        responseMsg(response);
        if (response.data.processStatus.code == 200) {
          router.replace('/konular');
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