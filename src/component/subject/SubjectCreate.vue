<template>
      <div>
    <div class="content-row">
      <div class="panel panel-default">
        <div class="panel-body">
          <form novalidate role="form" class="form-horizontal">
            <div class="form-group">
              <label class="col-md-2 control-label">Konu</label>
              <div class="col-md-10">
                <input
                  type="text"
                  required
                  v-model="subject"
                  placeholder="Konu"
                  id="soz"
                  class="form-control"
                  name="soz"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-offset-2 col-md-10">
                <a class="btn btn-info" type="submit" @click="CreateSubject">Oluştur</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
     data(){
        return{
            subject:""
        }
    },
    methods:{
        CreateSubject(){
        this.$store.dispatch("createSubject",{subject:this.subject})
        }
    }
}
</script>