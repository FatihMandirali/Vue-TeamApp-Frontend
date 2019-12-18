<template>
  <div>
    <div class="panel-heading">
      <h3 class="panel-title">
        <a class="toggle-sidebar"></a>Kullanıcılar
      </h3>
    </div>
    <div class="panel-body">
      <!--Panel Body Start-->
                      <table class="table table-striped">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>sdg</td>
                          </tr>
                         
                        </tbody>
                      </table>
    </div>
    <!-- panel body  -->
  </div>
</template>

<script>
export default {
  created(){
      this.$store.dispatch("listUser")
  }

};
</script>

<style scoped>
</style>