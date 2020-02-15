<template>
 <div>
    <div class="panel-heading">
      <h3 class="panel-title">
        <router-link to="/soz/olustur" tag="li" class="btn btn-sucess">
          Söz Oluştur
        </router-link>
      </h3>
    </div>
    <div class="panel-body">
      <!--Panel Body Start-->
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Söz</th>
            <th>Kullanıcısı</th>
            <th>Güncelle</th>
            <th>Sil</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in wordList">
            <td>{{item.wordDetail}}</td>
            <td>{{item.userName}}</td>
            <td>
              <button class="btn btn-success btn-sm" @click="wordDetail(item.id)">İncele</button>
            </td>
            <td>
              <button class="btn btn-danger btn-sm" @click="wordDelete(item.id)">Sil</button>
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
    store.commit("GetWordList");
  },
  computed:{
    wordList(){
      return this.$store.getters.getWordList;
    }
  },
  methods:{
    wordDelete(id){
     store.commit("deleteWord",id);
    },
    wordDetail(id){
      store.commit("getWord",id);
      router.replace("/sozdetay/"+id)
    }
  }
};
</script>

<style scoped>
</style>