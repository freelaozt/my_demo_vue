<template>
  <div>
    <b-media tag="li" class="py-2">
      <template #aside>
        <b-img-lazy
          class="img-responsive rounded"
          blank
          blank-height="180"
          blank-width="200"
          :blank-color="'#'+Math.floor(Math.random()*0xffffff).toString(16)"
          alt
          height="180"
          width="260"
          :src="thumb"
          onerror="javascript:this.src='https://picsum.photos/600/300/?image=25';"
        ></b-img-lazy>
      </template>
      <h5 class="mt-0 mb-1">
        <b-link>{{ title }}</b-link>
      </h5>
      <p class="mb-0" size="sm">{{plot}}</p>
      <b-button-group size="sm">
        <b-button pill variant="outline-danger">
          <b-icon-play-fill />
        </b-button>
      </b-button-group>
    </b-media>
  </div>
</template>

<script>
export default {
  props: ["title", "plot", "thumb"]
};
</script>

<style scoped>
</style>