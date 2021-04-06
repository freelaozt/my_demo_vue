<template>
  <div>
    <b-col>
      <article class="post post-medium" style>
        <div class="thumbr">
          <a class="post-thumb" href>
            <span class="play-btn-border" title="Play">
              <b-icon
                class="headline-round"
                icon="play-btn-fill"
                style="width: 60px; height: 60px"
              ></b-icon>
            </span>
            <div class="cactus-note ct-time font-size-1">
              <span>02:02</span>
            </div>
            <b-img-lazy
              class="img-responsive"
              :src="thumb"
              blank
              blank-height="200"
              blank-width="200"
              :blank-color="
                '#' + Math.floor(Math.random() * 0xffffff).toString(16)
              "
              onerror="javascript:this.src='https://picsum.photos/600/300/?image=25';"
              alt="#"
            ></b-img-lazy>
          </a>
        </div>
        <div class="infor">
          <p>
            <a class="title" href="#">{{ title }}</a>
          </p>
        </div>
      </article>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["title", "thumb"],
};
</script>

<style scoped>
</style>