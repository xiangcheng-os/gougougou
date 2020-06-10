<template>
  <div id="detail-swiper">
    <swiper class="swiper">
      <swiper-item v-for="(item,index) in message" :key="index">
        <img :src="item.pics_big" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  props: {
    message: {
      type: Array,

    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.swiper {
  height: 234px;
}
</style>