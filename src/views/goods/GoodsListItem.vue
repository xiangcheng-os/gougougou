<template>
  <div class="goods-item">
    <nav-bar class="goods-item-nav">
      <div slot="left" @click="backClick" class="back-item">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">商品列表</div>
    </nav-bar>
    <search/>
    <div
    v-for="(item, index) in goodsList"
    :key="index"
    class="item"
    @click="itemClick(item.goods_id)">
    <div class="pic">
      <img :src="item.goods_small_logo" alt="">
    </div>
    <div class="name">{{item.goods_name}}</div>
    <div class="price">￥{{item.goods_price}}</div>
  </div>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Search from 'components/common/search/Search'
import { getGoodsList } from '../../network/goodslist'
export default {
  name:'GoodsListItem',
  data () {
    return {
      name:'',
      goodsList:[]
    }
  },
  components: {
    NavBar,
    Search
  },
  created () {
    this.name = this.$route.params.name
    this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      getGoodsList(this.name).then(res => {
        console.log(res)
        this.goodsList = res.message.goods
      })
    },
    backClick () {
      this.$router.go(-1)
    },
  itemClick(id) {
    this.$router.push('/detail/'+ id)

  }
 }
}

</script>

<style scoped>
.goods-item{
  height: 618px;
  overflow: hidden;
}
.goods-list-search {
  position: relative;
  z-index: 9;
}
.back-item {
  font-size: 25px;
}

.back-item img {
  width: 24px;
  height: 24px;
  margin-top: 20px;
}
.item {
  height: 105px;
  border-bottom: 1px solid #dedede;
}
.item .pic {
  float: left;
  width: 108px;
  height: 104px;
}

.pic img {
  height: 104px;
  padding-left: 12px;
}

.price {
  float: right;
  width: 267;
  height: 52px;
  padding-left: 25px;
}
</style>