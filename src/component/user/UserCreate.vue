<template>
  <div>
    <div class="content-row">
      <div class="panel panel-default">
        <div class="panel-body">
          <form novalidate role="form" class="form-horizontal">
            <div class="form-group">
              <label class="col-md-2 control-label">Kullanıcı Adı</label>
              <div class="col-md-10">
                <input
                  type="text"
                  required
                  v-model="user.userName"
                  placeholder="Kullanıcı Adı"
                  id="username"
                  class="form-control"
                  name="username"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-2 control-label">Şifre</label>
              <div class="col-md-10">
                <input
                  type="text"
                  required
                  v-model="user.password"
                  placeholder="Şifre"
                  id="password"
                  class="form-control"
                  name="password"
                />
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-2 control-label" for="description">Takımı</label>
              <div class="col-md-10">
                <input
                  type="text"
                  required
                  placeholder="galatasaray,beşiktaş,fenerbahçe,trabzonspor"
                  id="teamName"
                  v-model="user.teamId"
                  class="form-control"
                  name="teamName"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-offset-2 col-md-10">
                <a class="btn btn-info" type="submit" @click="CreateUser">Oluştur</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { router } from "../router";
import {store} from "../../store/store";
export default {
  data() {
    return {
      user: {
        userName: "",
        password: "",
        teamId: ""
      }
    };
  },
  methods: {
    CreateUser() {
        this.$store.dispatch("createUser",{userName:this.user.userName,password:this.user.password,teamId:this.user.teamId})
    }
  }
};
</script>