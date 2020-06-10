<template>
  <div id="detail">
    <button @click="on">123</button>
    <nav-bar>
      <div slot="left" @click="backClick" class="back-item">
        <img src="~assets/img/navbar/返回.svg" alt />
      </div>
      <div slot="center">商品详情</div>
    </nav-bar>
    <detail-swiper :message="detailSwiper" />
    <scroll class="scroll">
      <div class="price">￥{{detailData.goods_price}}</div>
      <div class="title">
        <div class="title-l">{{detailData.goods_name}}</div>
        <div class="title-r">
          <img src="~assets/img/detail/收藏.svg" alt />
          <span>收藏</span>
        </div>
      </div>
      <div class="introduce">图文详情</div>
      <div v-html="detailData.goods_introduce"></div>
    </scroll>
    <detail-bar :message="detailData" @addCartClick="addCartClick" class="detail-bar" />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import DetailSwiper from './childComps/DetailSwiper'
import DetailBar from './childComps/DetailBar'

import { getDetailData } from 'network/detail'

export default {
  name: 'Detail',
  data () {
    return {
      id: Number,
      detailData: {}
    }
  },
  components: {
    NavBar,
    DetailSwiper,
    DetailBar,
    Scroll
  },
  created () {
    this.id = this.$route.params.id
    this.getDetailData()
  },
  computed: {
    detailSwiper () {
      return this.detailData.pics
    }
  },
  methods: {
    on () {
      console.log(this.detailData.pics)
    },
    getDetailData () {
      getDetailData(this.id).then(res => {
        // console.log(res)
        this.detailData = res.data.message
      })
    },
    backClick () {
      this.$router.go(-1)
    },
    addCartClick () {
      console.log('加入购物车')
      const product = {}
      product.id = this.detailData.goods_id
      product.name = this.detailData.goods_name
      product.price = this.detailData.goods_price
      product.pic = this.detailData.goods_small_logo
      product.count = 0
      this.$store.dispatch('addCart', product)
    }
  }
}
</script>

<style scoped>
#detail {
  height: 618px;
}

.scroll {
  height: 505px;
  overflow: hidden;
}

.detail-bar {
  position: relative;
}

.price {
  color: red;
  height: 42px;
  line-height: 42px;
  padding-left: 10px;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
  font-weight: 700;
}

.title {
  height: 56px;
  border-bottom: 1px solid #ddd;
}

.title-l {
  margin-top: 5px;
  width: 312px;
  height: 42px;
  border-right: 3px solid #ddd;
  padding: 0 5px;
  font-size: 14px;
  float: left;
}

.title-r {
  float: right;
  width: 60px;
  height: 44px;
  text-align: center;
  margin-top: 5px;
}

.title-r img {
  height: 14px;
}

.title-r span {
  display: block;
}

.introduce {
  height: 40px;
  color: red;
  padding-left: 5px;
  line-height: 40px;
  font-weight: 700;
}

.back-item {
  font-size: 25px;
}

.back-item img {
  width: 24px;
  height: 24px;
  margin-top: 20px;
}
</style>