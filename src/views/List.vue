<template>
  <div id="list" style="background: rgba(0, 0, 0, 0.9); color: #fff">
    <div class="bgimg"></div>

    <b-container class="content pt-2">
      <b-loading :isShowLoad="isShowLoad" :loadStatusMsg="loadStatusMsg" />
      <div>
        <b-headerTvPart
          v-for="(item, index) in tvShowData"
          :key="index"
          :title="item.title"
          :plot="item.plot"
          :poster="item.season_img"
          :part="$route.query.n"
        ></b-headerTvPart>
      </div>

      <div class="py-3">
        <ul class="list-unstyled">
          <b-listSeEp
            v-for="(item, index) in seasonEpData"
            :key="index"
            :title="item.title"
            :plot="item.plot"
            :thumb="item.thumb"
          ></b-listSeEp>
        </ul>
      </div>

      <div>
        <h4>演职人员</h4>
        <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="6">
          <b-gridActor
            v-for="(item, index) in seasonEpActorData"
            :key="index"
            :name="item.name"
            :role="item.role"
            :thumb="item.thumb"
            :profile="item.profile"
          ></b-gridActor>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import HeaderTvPart from "@/components/HeaderTvPart.vue";
import ListSeEp from "@/components/ListSeEp.vue";
import GridActor from "@/components/GridActor.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "list",
  components: {
    "b-listSeEp": ListSeEp,
    "b-gridActor": GridActor,
    "b-headerTvPart": HeaderTvPart,
    "b-loading": Loading,
  },
  data() {
    return {
      tvShowData: {},
      seasonEpData: {},
      seasonEpActorData: {},
      isShowLoad: true,
      loadStatusMsg: "数据正在加载中....",
    };
  },
  created() {
    this.$axios
      .all([
        this.getIdTvShowData(),
        this.getIdSeasonEpData(),
        this.getIdSeasonEpActorData(),
      ])
      .then((res) => {
        let tvShowData = res[0].data.resData;
        let seasonEpData = res[1].data.resData;
        let seasonEpActorData = res[2].data.resData;
        console.log("请求1", tvShowData);
        console.log("请求2", seasonEpData);
        console.log("请求3", seasonEpActorData);
        this.tvShowData = tvShowData;
        this.seasonEpData = seasonEpData;
        this.seasonEpActorData = seasonEpActorData;
        //加载结束
        this.isShowLoad = false;
      })
      .catch((err) => {
        console.log("数据获取异常：", err);
        this.loadStatusMsg = "数据获取异常!";
      });
  },
  methods: {
    getIdTvShowData() {
      // return this.$axios.get("http://localhost:3000/api/getIdTvShowData?q=76");
      return this.$axios.get(
        `api/getIdTvShowData?q=${this.$route.query.q}&s=${this.$route.query.n}`
      );
    },
    getIdSeasonEpData() {
      return this.$axios.get(
        // "http://localhost:3000/api/getIdSeasonEpData?q=76&s=2"
        `api/getIdSeasonEpData?q=${this.$route.query.q}&s=${this.$route.query.n}`
      );
    },
    getIdSeasonEpActorData() {
      return this.$axios.get(
        // "http://localhost:3000/api/getIdSeasonEpActorData?q=1"
        `api/getIdSeasonEpActorData?q=${this.$route.query.q}`
      );
    },
  },
};
</script>