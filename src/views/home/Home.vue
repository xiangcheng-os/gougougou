<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">优购平台</div></nav-bar>
    <home-swiper :swiperdata="swiperdata"/>
    <recommend-view :catitems="catitems"></recommend-view>
    <goods-list-item :floordata="floordata"></goods-list-item>
    
    

  </div>
  
  

</template>

<script>

import {getHomeRecommenddata,getHomeMultidata,getHomeGoods} from "../../network/home";
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import GoodsListItem from '../../components/content/goods/GoodsListItem'
import TabBar  from 'components/common/tabbar/TabBar'
import NavBar from 'components/common/navbar/NavBar'
// import Scorll from 'components/common/scroll/Scroll'
export default {
  name: "Home",
  components: {
    TabBar,
    NavBar,
    HomeSwiper,
    RecommendView,
    // Scroll,
    GoodsListItem
    
    
  },
    data (){
    return {
      swiperdata: [],
      catitems: [],
      floordata:{
        
      },
      

      
 
    }
  },
  //  computed: {
  //   showGoods() {
  //     return this.floordata[this.currentType]

  //   }
  // },
  created() {
    this.getHomeMultidata()
    this.getHomeRecommenddata()
    this.getHomeGoods('floor_title')
    this.getHomeGoods('product_list')
  
    
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.swiperdata = res.message
        console.log(res)
      })
      
    },
    getHomeRecommenddata() {
     getHomeRecommenddata().then(res => {
        this.catitems = res.message
        console.log(res)
      })
    },

      getHomeGoods() {
     getHomeGoods().then(res => {
        this.floordata = res.message
        console.log(res)
      })
    },
    
  }
 
}
</script>

<style >
.home-nav {
  background-color: #f00420;
  color:#fff;
}

</style> 


