<template>
  <div id="app">
    <nav role="navigation" class="navbar navbar-custom">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            data-target="#bs-content-row-navbar-collapse-5"
            data-toggle="collapse"
            class="navbar-toggle"
            type="button"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="#" class="navbar-brand">Bootflat-Admin</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div id="bs-content-row-navbar-collapse-5" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li class="active">
              <a href="getting-started.html">Getting Started</a>
            </li>
            <li class="active">
              <a href="index.html">Documentation</a>
            </li>
            <!-- <li class="disabled"><a href="#">Link</a></li> -->
            <li class="dropdown">
              <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                Silverbux
                <b class="caret"></b>
              </a>
              <ul role="menu" class="dropdown-menu">
                <li class="dropdown-header">Setting</li>
                <li>
                  <a href="#">Action</a>
                </li>
                <li class="divider"></li>
                <li class="active">
                  <a href="#">Separated link</a>
                </li>
                <li class="divider"></li>
                <li class="disabled">
                  <a href="#">Signout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>

    <div class="container-fluid">
      <!--documents-->
      <div class="row row-offcanvas row-offcanvas-left">
        <div class="col-xs-6 col-sm-3 sidebar-offcanvas" role="navigation">
          <ul class="list-group panel">
            <li class="list-group-item">
              <i class="glyphicon glyphicon-align-justify"></i>
              <b>Menü</b>
            </li>

            <router-link tag="li" to="/" class="list-group-item">
              <a>
                <i class="glyphicon glyphicon-user"></i>Kullanıcılar
              </a>
            </router-link>
            <!-- 
            <li class="list-group-item">
              <a href="icons.html">
                <i class="glyphicon glyphicon-user"></i>Kullanıcılar
              </a>
            </li>-->
             <router-link tag="li" to="/konular" class="list-group-item">
              <a>
                <i class="glyphicon glyphicon-tags"></i>Konular
              </a>
            </router-link>
            <!-- <li class="list-group-item">
              <a href="icons.html">
                <i class="glyphicon glyphicon-tags"></i>Konular
              </a>
            </li> -->
            <router-link tag="li" to="/sozler" class="list-group-item">
              <a>
                <i class="glyphicon glyphicon-list-alt"></i>Sözler
              </a>
            </router-link>
            <!-- <li class="list-group-item">
              <a href="list.html">
                <i class="glyphicon glyphicon-list-alt"></i>Sözler
              </a>
            </li> -->
            <li class="list-group-item">
              <a href="list.html">
                <i class="glyphicon glyphicon-transfer"></i>Oyuncular
              </a>
            </li>
            <li class="list-group-item">
              <a href="list.html">
                <i class="glyphicon glyphicon-stats"></i>Enler
              </a>
            </li>
            <li class="list-group-item">
              <a href="list.html">
                <i class="glyphicon glyphicon-briefcase"></i>Genel Bilgi
              </a>
            </li>
            <li class="list-group-item">
              <a href="list.html">
                <i class="glyphicon glyphicon-folder-open"></i>Loglar
              </a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-9 content">
          <div class="panel panel-default">
            <router-view></router-view>
          </div>
        </div>
        <!-- content -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

