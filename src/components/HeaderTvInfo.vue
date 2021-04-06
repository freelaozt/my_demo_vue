<template>
  <div>
    <b-card no-body class="overflow-hidden" style="background: rgba(0, 0, 0, 0); color: #fff">
      <b-row no-gutters>
        <b-col md="4">
          <b-card-img-lazy
            blank-width="240"
            blank-height="320"
            :src="poster"
            alt="Image"
            class="rounded-0"
            onerror="javascript:this.src='https://picsum.photos/600/300/?image=25';"
            :blank-color="'#'+Math.floor(Math.random()*0xffffff).toString(16)"
          ></b-card-img-lazy>
        </b-col>
        <b-col md="8">
          <b-card-body :title="title" :sub-title="originaltitle" sub-title-tag="h6" title-tag="h2">
            <b-card-text>
              {{ year }}
              <b-icon icon="star-fill" variant="warning" font-scale="1.5" animation="fade"></b-icon>
              {{rating}}
            </b-card-text>
            <b-card-text>{{ genre }}</b-card-text>

            <b-button-group>
              <b-button variant="outline-info" class="mb-2" size="sm">
                <b-icon icon="play" aria-hidden="true"></b-icon>播放下一个
              </b-button>
              <b-button variant="outline-warning" class="mb-2" size="sm">
                <b-icon icon="play-fill" aria-hidden="true"></b-icon>全部播放
              </b-button>
              <b-button variant="outline-danger" class="mb-2" size="sm">
                <b-icon icon="play-fill" aria-hidden="true"></b-icon>随机播放
              </b-button>
              <b-button variant="outline-success" class="mb-2" size="sm">
                <b-icon icon="pencil-fill" aria-hidden="true"></b-icon>编辑词条
              </b-button>
            </b-button-group>

            <b-card-text>{{plot}}</b-card-text>

            <br />
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["title", "originaltitle", "plot", "year", "rating", "genre", "poster"]
};
</script>

<style scoped>
</style>