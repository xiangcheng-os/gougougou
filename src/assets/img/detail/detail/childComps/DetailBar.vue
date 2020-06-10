<template>
  <div class="detail-bar">
    <dl>
      <dt><img src="~assets/img/detail/客服.svg" alt=""></dt>
      <dd>客服</dd>
    </dl>
    <dl>
      <dt><img src="~assets/img/detail/分享.svg" alt=""></dt>
      <dd>分享</dd>
    </dl>
    <dl>
      <dt><img src="~assets/img/detail/购物车.svg" alt=""></dt>
      <dd>购物车</dd>
    </dl>
    <div class="shop-cart" @click="addCartClick">加入购物车</div>
    <div class="buy">立即购买</div>
  </div>
</template>

<script>
  export default {
    name:	'DetailBar',
    methods: {
      addCartClick() {
        this.$emit('addCartClick')
      }
    }
  }
</script>

<style scoped>
  .detail-bar {
    height: 49px;
    background-color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 19;

    display: flex;
  }

  dt img {
    width: 26px;
    height: 26px;
    padding-top: 5px;
  }

  dl{
    flex: 1;
    text-align: center;
  }

  .shop-cart, .buy {
    width: 106px;
    text-align: center;
    line-height: 49px;
    font-size: 700;
    color: #fff;
  }

  .shop-cart {
    background-color: #ffa500;
  }

  .buy {
    background-color: #eb4450;
  }
</style>