<template>
  <div>
       <div class="content-row">

                  <div class="panel panel-default">
                  

                    <div class="panel-body">
                      <form novalidate="" role="form" class="form-horizontal">
                        <div class="form-group">
                          <label class="col-md-2 control-label">Kullanıcı Adı</label>
                          <div class="col-md-10">
                            <input type="text"  required=""  v-model="userList.userName"  placeholder="Kullanıcı Adı" id="username" class="form-control" name="username">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-2 control-label">Şifre</label>
                          <div class="col-md-10">
                            <input type="text"   required="" v-model="userList.password" placeholder="Şifre" id="password" class="form-control" name="password">
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="col-md-2 control-label"  for="description">Kayıt Tarihi</label>
                          <div class="col-md-10">
                            <input type="text"  required="" disabled v-model="userList.recordDate" placeholder="Kayıt Tarihi" id="recordDate" class="form-control" name="recordDate">
                          </div>
                        </div>
                         <div class="form-group">
                          <label class="col-md-2 control-label" for="description">Takımı</label>
                          <div class="col-md-10">
                            <input type="text"  required="" disabled v-model="userList.teamId" placeholder="Takımı" id="teamName" class="form-control" name="teamName">
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="col-md-offset-2 col-md-10">
                            <a class="btn btn-info" @click="userUpdate" type="submit">Güncelle</a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
  </div>
</template>

<script>
import {store} from "../../store/store";
import { router } from "../router";
export default {
  data(){
    return{
      user:{
         userName: "",
        password: "",
        teamId: "",
        oldUserName:""
      }
    }
  },
  created(){
  this.user.oldUserName=store.getters.getUser.userName
  },
    computed:{
    userList(){
      
     return this.$store.getters.getUser;
    }
  },
  methods:{
    userUpdate(){
      console.log(this.$route.params.id + " userNameee");
      this.$store.dispatch("updateUser",{oldUserName:this.$route.params.id, userName:this.userList.userName,password:this.userList.password,teamId:this.userList.teamId})
    }
  }

};
</script>