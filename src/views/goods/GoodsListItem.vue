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
import {getGoodsList} from 'network/goodlist'
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
        this.goodsList = res.data.message.goods
      })
    },
    backClick () {
      this.router.go(-1)
    },
  itemClick(id) {
    this.$router.push('/detail/'+id)

  }
 }
}

</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img {
    width:100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left:0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color:var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content:'';
    position: absolute;
    left:-15px;
    top:-1px;
    width:14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>