<template>
  <div class="recommend">
    <div v-for="item in catitems" :key="item.navigator_url" class="recommend-item">
      <a :href="item.navigator_url">
        <img :src="item.image_src" alt="">
        <!-- <div>{{item.name}}</div> -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"RecommendView",
  props: {
    catitems: {
      type:Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style scoped>
  .recommend {
    display: flex;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 80px;
    height:84px;
  }

</style>