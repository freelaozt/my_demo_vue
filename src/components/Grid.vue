<template>
  <div>
    <b-col>
      <article class="post post-medium" style>
        <div class="thumbr">
          <a class="post-thumb" :href="'/#/list?q=' + id + '&n=' + number">
            <span class="play-btn-border" title="Play">
              <b-icon class="headline-round" icon="people-fill" style="width: 60px; height: 60px"></b-icon>
            </span>
            <b-img-lazy
              class="img-responsive"
              blank
              blank-width="240"
              blank-height="320"
              :blank-color="
                '#' + Math.floor(Math.random() * 0xffffff).toString(16)
              "
              :src="thumb"
              alt="#"
              onerror="javascript:this.src='https://picsum.photos/600/300/?image=25';"
            ></b-img-lazy>
          </a>
        </div>
        <div class="infor" style="text-align: center">
          <h5>
            <a
              class="title"
              :href="'/#/list?q=' + id + '&n=' + number"
            >{{ name }}{{ id }}{{ number }}</a>
          </h5>
          <span class="posts-txt" title="Posts from Channel">
            <b-icon icon="arrow-up" variant="danger"></b-icon>
          </span>
        </div>
      </article>
    </b-col>
  </div>
</template>

<script>
export default {
  props: ["name", "id", "number", "thumb"]
};
</script>

<style scoped>
</style>