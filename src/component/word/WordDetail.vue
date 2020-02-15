<template>
    <div>
    <div class="content-row">
      <div class="panel panel-default">
        <div class="panel-body">
          <form novalidate role="form" class="form-horizontal">
            <div class="form-group">
              <label class="col-md-2 control-label">Söz</label>
              <div class="col-md-10">
                <input
                  type="text"
                  required
                  v-model="getWord"
                  placeholder="Söz"
                  id="soz"
                  class="form-control"
                  name="soz"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-offset-2 col-md-10">
                <a class="btn btn-info" type="submit" @click="UpdateWord(getWord)">Oluştur</a>
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
            wordDetail:""
        }
    },
    computed:{
      getWord:{
     get(){ return this.$store.getters.getSubject;},
     set(value){
       this.wordDetail=value}
      }
  

  },
    methods:{
        UpdateWord(word){
        this.$store.dispatch("updateWord",{word:this.wordDetail,id:this.$route.params.id})
        }
    }
}
</script>