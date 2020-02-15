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
                  v-model="getSubject"
                  placeholder="Söz"
                  id="soz"
                  class="form-control"
                  name="soz"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-offset-2 col-md-10">
                <a class="btn btn-info" type="submit" @click="UpdateSubject(getSubject)">Güncelle</a>
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
            subject:""
        }
    },
    computed:{
      getSubject:{
     get(){ return this.$store.getters.getSubject;},
     set(value){
       this.subject=value}
      }
  

  },
  methods:{
      UpdateSubject(subject){
        this.$store.dispatch("updateSubject",{subject:this.subject,id:this.$route.params.id})
          
      }
  }
}
</script>