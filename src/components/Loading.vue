<template>
<div class="loading" v-show="isShowLoad">
<b-col md="6" class="mb-3">
      <b-icon icon="three-dots-vertical" animation="cylon-vertical" font-scale="4"></b-icon>
      <p>{{loadStatusMsg}}</p>
    </b-col>
</div>
</template>

<script>
export default {
  props: ["isShowLoad", "loadStatusMsg"],
};
</script>

<style scope>
</style>