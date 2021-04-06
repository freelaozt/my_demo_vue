<template>
  <div id="login" class>
    <b-container>
      <b-alert
        :show="dismissCountDown"
        dismissible
        variant="warning"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        <p>用户名或密码错误，请重试 {{ dismissCountDown }} 秒...</p>
        <b-progress
          variant="warning"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
        ></b-progress>
      </b-alert>

      <b-row align-h="center" class="mt-5">
        <b-col cols="12" sm="10" md="8" lg="6" xl="6">
          <b-card class="p-3" align-h="left">
            <h3 class="mb-4">登录</h3>
            <!-- v-if="show" -->
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group
                id="input-group-2"
                label="登录名："
                label-for="input-2"
                class="d-flex justify-content-start"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  required
                  placeholder="Enter name"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-1"
                label="密  码："
                label-for="input-1"
                class="d-flex justify-content-start"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.pwd"
                  type="password"
                  required
                  placeholder="Enter pwd"
                ></b-form-input>
              </b-form-group>

              <div class="d-flex justify-content-between">
                <div>
                  <b-button type="submit" variant="primary">登录</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </div>
                <div>
                  <b-link href="/#/adduser">添加账号</b-link>
                </div>
              </div>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        pwd: "",
      },
      dismissSecs: 10,
      dismissCountDown: 0,
      // show: true,
    };
  },
  created() {
    // if存在cookies（isLogin）与服务器比对
    if (this.$cookies.isKey("isLogin")) {
      console.log(this.$cookies.get("isLogin"));
      console.log(true);
      //返回首页
      console.log("back home");
      this.$router.push({
        name: "Home",
      });
      //分离cookies-isLogin
    } else {
      //不用管
      console.log(false);
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      // alert(JSON.stringify(this.form));
      //用户名密码是否与服务器一致
      // let url = `http://localhost:3000/api/checkUser?n=${this.form.name}&p=${this.form.pwd}`;
      let url = `api/checkUser?n=${this.form.name}&p=${this.form.pwd}`;
      this.request(url)
        .then((res) => {
          console.log("request数据请求success", res);
          let { user, pwd, code, status } = res;

          switch (status) {
            case "success":
              //存入cookies-isLogin
              let md5 = this.$md5(`${this.form.name},${this.form.pwd}`);
              this.$cookies.set(
                "isLogin",
                `${this.form.name},${this.form.pwd}`
              );
              //返回首页
              console.log("back home");
              // this.$router.push({
              //   name: "Home",
              // });
              history.go(-1);
              break;
            case "error":
              this.showAlert();
              console.log("username or pwd error!");
              break;
          }
        })
        .catch((err) => {
          console.log("request数据请求err", err);
        });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.pwd = "";
      this.form.name = "";
      // Trick to reset/clear native browser form validation state
      // this.show = false;
      // this.$nextTick(() => {
      //   this.show = true;
      // });
    },
    async request(url) {
      let results = "";
      await this.$axios
        .get(url)
        .then((res) => {
          console.log("数据请求success", res);
          results = res.data.results;
        })
        .catch((err) => {
          console.log("数据请求错误", err);
        });
      console.log("数据返回：", results);
      return results;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style>
</style>