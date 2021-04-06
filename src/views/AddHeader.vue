<template>
  <div id="addHeader" class="">
    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-col cols="5">
          <b-card class="p-3">
            <h3 class="mb-4">上传新头像</h3>

            <h2>上传事件文件钩子,进度，速度,单位</h2>
            <input type="file" class="myfile" />
            进度：<progress value="0" max="100"></progress
            ><span class="percent">0%</span> 速度：<span class="speed"
              >20b/s</span
            >
            <button>点击上传文件</button>
            <button>取消上传文件</button>
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
/* @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:400,500,700,900");

body {
  background: #eef1f4;
  font-family: "Lato", sans-serif;
}

.nav-background {
  background: #353535;
} */
</style>