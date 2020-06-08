<template>
  <div class="home-floor">
    <div v-for="(item, index) in message" :key="index">
      <div class="title">
        <img :src="item.floor_title.image_src" :alt="item.name">
      </div>
      <div class="content">
        <div v-for="(item,indey) in item.product_list" :key="indey" :class="{first:indey===0}">
          <div class="content-item">
            <img :src="item.image_src" :alt="item.name">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name:"HomeFloor",
  props: {
    message:{
      type:Array,
    default () {

      return []
    }
   } 
  }
}
</script>

<style scoped>
.title img {
  height: 44px;
  width: 100%;
}

.content {
  margin-left:1px;
}

.content-item {
  float: left;
}
.content-item img {
  width: 179px;
  height: 130px;
}
.first img {
  height: 264px;
}
</style>