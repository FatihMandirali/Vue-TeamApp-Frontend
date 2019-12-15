<template>
  <div>
    <div class="container">
      <form class="form-signin" role="form" action="index.html">
        <h3 class="form-signin-heading">Lütfen Giriş Yapın</h3>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="glyphicon glyphicon-user"></i>
            </div>
            <input
              type="text"
              class="form-control"
              name="username"
              id="username"
              placeholder="Username"
              autocomplete="off"
            />
          </div>
        </div>

        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="glyphicon glyphicon-lock"></i>
            </div>
            <input
              type="password"
              class="form-control"
              name="password"
              id="password"
              placeholder="Password"
              autocomplete="off"
            />
          </div>
        </div>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Giriş yap</button>
      </form>
    </div>
    <div class="clearfix"></div>
    <br />
    <br />
    <!--footer-->
    <div class="site-footer login-footer">
      <div class="container">
        <div class="copyright clearfix text-center">
          <p>
            <b>Bootflat</b>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="getting-started.html">Getting Started</a>&nbsp;&bull;&nbsp;
            <a href="index.html">Documentation</a>&nbsp;&bull;&nbsp;
            <a href="https://github.com/Bootflat/Bootflat.UI.Kit.PSD/archive/master.zip">Free PSD</a>&nbsp;&bull;&nbsp;
            <a href="colors.html">Color Picker</a>
          </p>
          <p>
            Code licensed under
            <a
              href="http://opensource.org/licenses/mit-license.html"
              target="_blank"
              rel="external nofollow"
            >MIT License</a>, documentation under
            <a href="http://creativecommons.org/licenses/by/3.0/" rel="external nofollow">CC BY 3.0</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>