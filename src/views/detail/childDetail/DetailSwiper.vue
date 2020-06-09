<template>
  <div class="detail-swiper">
    <swiper class="swiper">
      <swiper-item v-for="(item, index) in message" :key="index">
        <img src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>