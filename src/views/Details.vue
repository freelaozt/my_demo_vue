<template>
  <div id="details" style="background: rgba(0, 0, 0, 0.9); color: #fff">
    <div class="bgimg"></div>
    <b-container class="content pt-2">
      <b-loading :isShowLoad="isShowLoad" :loadStatusMsg="loadStatusMsg" />
      <div class>
        <b-headerTvInfo
          v-for="(item, index) in tvShowData"
          :key="index"
          :title="item.title"
          :plot="item.plot"
          :originaltitle="item.originaltitle"
          :year="item.year"
          :rating="item.rating"
          :genre="item.genre"
          :poster="item.season_img"
        ></b-headerTvInfo>
      </div>

      <div v-if="isSeasonEpDiv">
        <b-button-toolbar aria-label="Toolbar with button groups">
          <h4>接下来{{ $route.query.p }}</h4>
          <b-button-group class="mx-1">
            <b-button variant="outline-info" class="mb-2" size="sm"
              >&lsaquo;</b-button
            >
          </b-button-group>
          <b-button-group class="mx-1">
            <b-button variant="outline-info" class="mb-2" size="sm"
              >&rsaquo;</b-button
            >
          </b-button-group>
        </b-button-toolbar>
        <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="6">
          <b-gridSeEp
            v-for="(item, index) in seasonEpData"
            :key="index"
            :title="item.title"
            :thumb="item.thumb"
          />
        </b-row>
      </div>

      <div v-if="isSeasonTitleDiv">
        <h4>季</h4>
        <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="6">
          <b-grid
            v-for="(item, index) in seasonTitleData"
            :key="index"
            :name="item.season_name"
            :id="$route.query.p"
            :number="item.season_number"
            :thumb="item.season_img"
          ></b-grid>
        </b-row>
      </div>

      <div v-if="isTvshowActorDiv">
        <h4>演员表</h4>
        <b-row cols="2" cols-sm="2" cols-md="4" cols-lg="6">
          <b-gridActor
            v-for="(item, index) in tvShowActorData"
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
import HeaderTvInfo from "@/components/HeaderTvInfo.vue";
import GridSeEp from "@/components/GridSeEp.vue";
import GridActor from "@/components/GridActor.vue";
import Grid from "@/components/Grid.vue";
import Loading from "@/components/Loading.vue";

export default {
  components: {
    "b-headerTvInfo": HeaderTvInfo,
    "b-gridSeEp": GridSeEp,
    "b-gridActor": GridActor,
    "b-grid": Grid,
    "b-loading": Loading,
  },
  data() {
    return {
      isTvShowEpDiv: false,
      tvShowData: {},
      isSeasonEpDiv: false,
      seasonEpData: {},
      isSeasonTitleDiv: false,
      seasonTitleData: {},
      isTvshowActorDiv: false,
      tvShowActorData: {},
      isShowLoad: true,
      loadStatusMsg: "数据正在加载中....",
    };
  },
  created() {
    this.$axios
      .all([
        this.getIdTvShowData(),
        this.getIdSeasonEpData(),
        this.getIdSeasonTitleData(),
        this.getIdTvShowActorData(),
      ])
      .then((res) => {
        let tvShowData = res[0].data.resData;
        let seasonEpData = res[1].data.resData;
        if (seasonEpData.length > 0) {
          this.isSeasonEpDiv = true;
        }
        let seasonTitleData = res[2].data.resData;
        if (seasonTitleData.length > 0) {
          this.isSeasonTitleDiv = true;
        }
        let tvShowActorData = res[3].data.resData;
        if (tvShowActorData.length > 0) {
          this.isTvshowActorDiv = true;
        }
        console.log("请求1", tvShowData);
        console.log("请求2", seasonEpData);
        console.log("请求3", seasonTitleData);
        console.log("请求4", tvShowActorData);
        this.tvShowData = tvShowData;
        this.seasonEpData = seasonEpData;
        this.seasonTitleData = seasonTitleData;
        this.tvShowActorData = tvShowActorData;
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
      // return this.$axios.get(`http://localhost:3000/api/getIdTvShowData?q=${this.$route.query.p}`);
      // return this.$axios.get(`api/getIdTvShowData?q=${this.$route.query.p}`);
      return this.$axios.get(`api/getIdTvShowData?q=${this.$route.query.p}`);
    },
    getIdSeasonEpData() {
      return this.$axios.get(
        // "http://localhost:3000/api/getIdSeasonEpData?q=76&s=2"
        `api/getIdSeasonEpData?q=${this.$route.query.p}&s=1`
      );
    },
    getIdSeasonTitleData() {
      return this.$axios.get(
        // "http://localhost:3000/api/getIdSeasonTitleData?q=76"
        `api/getIdSeasonTitleData?q=${this.$route.query.p}`
      );
    },
    getIdTvShowActorData() {
      return this.$axios.get(
        // "http://localhost:3000/api/getIdTvShowActorData?q=76"
        `api/getIdTvShowActorData?q=${this.$route.query.p}`
      );
    },
  },
};
</script>

<style scoped>
</style>