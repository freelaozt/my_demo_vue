<template>
  <div>
    <b-col>
      <article class="post post-medium" style>
        <div class="thumbr">
          <a class="post-thumb" :href="'/#/details?p=' + pageId">
            <span class="play-btn-border" title="Play">
              <b-icon
                class="headline-round"
                icon="play-btn-fill"
                style="width: 60px; height: 60px"
              ></b-icon>
            </span>
            <b-img-lazy
              class="img-responsive"
              :src="imgUrl"
              blank
              blank-height="200"
              blank-width="200"
              :blank-color="
                '#' + Math.floor(Math.random() * 0xffffff).toString(16)
              "
              alt="#"
              onerror="javascript:this.src='https://picsum.photos/600/300/?image=25';"
            ></b-img-lazy>
            <!-- <b-img-lazy
              class="img-responsive"
              onerror="javascript:this.src='https://picsum.photos/600/300/?image=25';"
            ></b-img-lazy> -->
            <!-- <img src="https://picsum.photos/600/300/?image=25" v-real-img="imgUrl" default-img="https://hxkj.vip/demo/vueImgOnerror/img/logo.16af1ba4.png" alt="">  -->
          </a>
        </div>
        <div class="infor" style="text-align: center">
          <h6>
            <a class="title" :href="'/#/details?p=' + pageId">{{ title }}</a>
          </h6>
          <span class="posts-txt" title="Posts from Channel">
            <b-icon icon="arrow-up" variant="danger"></b-icon>扮演{{ pageId }}
          </span>
        </div>
      </article>
    </b-col>
  </div>
</template>

<script>
//:src="'https://picsum.photos/240/320/?image='+Math.floor((Math.random()*100)+1)"
export default {
  props: ["title", "imgUrl", "pageId"],
  methods: {},
};
</script>

<style scope>
</style>