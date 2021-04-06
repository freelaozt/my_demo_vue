<template>
  <b-container id="home" class="bv-example-row mt-3">
    <div class="content">
      <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="6">
        <b-card
          v-for="(item, index) in homeData"
          :key="index"
          :title="item.title"
          :imgUrl="item.season_img"
          :pageId="item.id"
        ></b-card>
      </b-row>
      <b-loading :isShowLoad="isShowLoad" :loadStatusMsg="loadStatusMsg" />
    </div>

    <div class="overflow-auto">
      <div class="mt-3">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="center"
          pills
          @input="paginate(currentPage)"
        ></b-pagination>
      </div>
    </div>
  </b-container>
</template>

<script>
//引入组件
import Card from "@/components/Card.vue";
import Loading from "@/components/Loading.vue";
export default {
  name: "home",
  components: { "b-card": Card, "b-loading": Loading },
  data() {
    return {
      homeData: {},
      perPage: 20,
      currentPage: 1,
      totalRows: 0,
      isShowLoad: true,
      loadStatusMsg: "数据正在加载中...."
    };
  },
  methods: {
    paginate(currentPage) {
      this.requestData(currentPage);
    },
    requestData(currentPage) {
      this.$axios
        // .get(`http://localhost:3000/api/getData?p=${currentPage}`)
        .get(`api/getData?p=${currentPage}`)
        //.get(`api/p=${currentPage}`)
        .then(res => {
          this.perPage = res.data.results.perPage;
          this.totalRows = res.data.results.totalRows;
          this.homeData = res.data.results.resData;
          this.isShowLoad = false;
        })
        .catch(err => {
          console.log("数据获取异常：", err);
          this.loadStatusMsg = "数据获取异常!";
        });
    }
  },
  created() {
    //let id = this.$route.query.id;
    this.requestData(1);
  }
};
</script>

<style scoped>

</style>
