<template>
  <div>
    <div class="panel-heading">
      <h3 class="panel-title">
        <router-link to="/kullanici/olustur" tag="li" class="btn btn-sucess">
          Kullanıcı Oluştur
        </router-link>
      </h3>
    </div>
    <div class="panel-body">
      <!--Panel Body Start-->
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Kullanıcı Adı</th>
            <th>Şifre</th>
            <th>Takım</th>
            <th>Kayıt Tarihi</th>
            <th>Güncelle</th>
            <th>Sil</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in userList">
            <td>{{item.userName}}</td>
            <td>{{item.password}}</td>
            <td>{{item.teamId}}</td>
            <td>{{item.recordDate}}</td>
            <td>
              <button class="btn btn-success btn-sm" @click="userDetail(item.userName)">İncele</button>
            </td>
            <td>
              <button class="btn btn-danger btn-sm" @click="userDelete(item.userName)">Sil</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- panel body  -->
  </div>
</template>

<script>
import { store } from "../../store/store";
import { router } from "../router";
export default {
  created() {
    store.commit("updateUserList");
  },
  computed: {
    userList() {
      return this.$store.getters.getUserList;
    }
  },
  methods: {
    userDetail(userName) {
      //alert(userName);
      store.commit("getUser", userName);
      router.replace("/kullanicidetay/" + userName);
    },
    userDelete(userName) {
      store.commit("deleteUser", userName);
      router.replace("/kullanicilar");
    }
  }
};
</script>

<style scoped>
</style>