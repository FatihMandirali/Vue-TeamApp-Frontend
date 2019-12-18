<template>
  <div>
    <div class="container">
      <form class="form-signin" role="form" action="index.html">
        <h3 class="form-signin-heading">Lütfen Giriş Yapın</h3>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="glyphicon glyphicon-user"></i>
            </div>
            <input
              type="text"
              class="form-control"
              name="username"
              id="username"
              v-model="username"
              placeholder="Username"
              autocomplete="off"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="glyphicon glyphicon-lock"></i>
            </div>
            <input
              type="password"
              class="form-control"
              name="password"
              v-model="password"
              id="password"
              placeholder="Password"
              autocomplete="off"
            />
          </div>
        </div>

        <button class="btn btn-lg btn-primary btn-block" @click="Login" type="button">Giriş yap</button>
      </form>
    </div>
    <div class="clearfix"></div>
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import {router} from "../router";
//import {router} from "../../router";
//Axios.defaults.headers.get["Accepts"]="application/json";
export default {
  data() {
    return {
      username: "",
      password: "",
      token:""
    };
  },
  methods: {
    Login() {
      axios
        .post("http://localhost:56307/api/AdminUser/Login", {
          userName: this.username,
          password: this.password
        })
        .then(function(response) {
          console.log(response);
          if(response.data.processStatus.code==401){
            alert(response.data.friendlyMessage.description)
          }else{
            localStorage.token = response.data.data.token;
            router.replace("/kullanicilar")
          }
        });

      //  Axios.get("http://localhost:56307/api/AdminUser/GetUserList")
      // .then(function(response){
      //   console.log(response);
      // })
    }
  }
};
</script>