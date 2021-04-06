<template>
  <div id="forget" class="">
    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-col cols="5">
          <b-card class="p-3">
            <h3 class="mb-4">重新注册</h3>

            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
                ></b-form-input>
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
                  type="pwd"
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
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>

</style>