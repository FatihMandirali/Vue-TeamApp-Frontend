<template>
  <div>
    <div class="panel-heading">
      <h3 class="panel-title">
        <router-link to="/konu/olustur" tag="li" class="btn btn-sucess">
          Konu Oluştur
        </router-link>
      </h3>
    </div>
    <div class="panel-body">
      <!--Panel Body Start-->
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Konu</th>
            <th>Güncelle</th>
            <th>Sil</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in subjectList">
            <td>{{item.subject}}</td>
            <td>
              <button class="btn btn-success btn-sm" @click="subjectDetail(item.id)">İncele</button>
            </td>
            <td>
              <button class="btn btn-danger btn-sm" @click="subjectDelete(item.id)">Sil</button>
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
    store.commit("GetSubjectList");
  },
  computed:{
    subjectList(){
      return this.$store.getters.getSubjectList;
    }
  },
  methods:{
    subjectDelete(id){
      store.commit("deleteSubject",id);
    },
    subjectDetail(id){
      store.commit("getSubject",id);
      router.replace("/konudetay/"+id)
    },
  }
};
</script>

<style scoped>
</style>