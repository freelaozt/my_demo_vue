<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">TvInfo</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/#/home">首页</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>-->
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ username != "" ? username : "未登录" }}</em>
            </template>
            <b-dropdown-item
              href="/#/login"
              v-show="username != '' ? false : true"
              >请您先登录！</b-dropdown-item
            >
            <b-dropdown-item
              href="/#/addHeader"
              v-show="username != '' ? true : false"
              >上传用户头像</b-dropdown-item
            >
            <b-dropdown-item
              href="#"
              v-show="username != '' ? true : false"
              @click="signOut"
              >退出</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>


export default {
  data() {
    return {
      username: "",
      childWords:""
    };
  },
  created() {
    // if存在cookies（isLogin）与服务器比对
    if (this.$cookies.isKey("isLogin")) {
      console.log(this.$cookies.get("isLogin"));
      let isLogin = this.$cookies.get("isLogin");
      let loginVal = isLogin.split(",");
      console.log(loginVal[0], loginVal[1]);
      this.username = loginVal[0];

      console.log(true);
      //分离cookies-isLogin
    } else {
      //不用管
      console.log(false);
    }
  },
  methods: {
    signOut() {
      this.$cookies.remove("isLogin");
      this.username = "";
      history.go(-1);
      console.log("signout");
    },
  },
};
</script>

<style scoped>
#nav a.router-link-exact-active {
  color: white;
}
</style>