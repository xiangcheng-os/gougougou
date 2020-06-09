<template>
  <div id="detail">
    <nav-bar>
      <div slot="left" @click="backClick" class="back-item">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">商品详情</div>
    </nav-bar>
    <detail-swiper :message="detailSwiper"></detail-swiper>
    <div class="price">￥{{detailData.goods_price}}</div>
    <div class="title">
      <div class="title-a">{{detailData.goods_price}}</div>
      <div class="title-b">
        <img src="~assets/img/common/collect.svg" alt="">
        <span>收藏</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'Detail',
  data () {
    return {
      id:Number,
      detailData:{}
    }
  },
  components: {
    NavBar,
    detailSwiper,
  },


  computed: {
    detailSwiper () {
      return this.detailData.pics
    }
  },
  methods: {

  }

}
</script>

<style>

</style>