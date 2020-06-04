<template>
<div>
  <nav-bar class="home-nav"><div slot="center">分类页</div></nav-bar>
  <search></search>
  <!-- <div class="catemain">
    <div class="cateleft">
      <ul>
        <li v-for=" item in search" :key="item.index">
          <a href="" v-bind:id="cat_id"></a>

        </li>
      </ul>
    </div>

    <div class="cate_right" ref="">
      <div class="cate_right_box">
        <a href=""></a>

      </div>
    </div> -->
    <div class="jd_main" >        
			<div class="cate_left" ref="cate_left">
				<ul>               
					<li v-for="(item,index) in categories" :key="index">
						<a href="categories.cat_name" v-bind:id="categories.cat_id" v-on:touchstart="cateright(categories.cat_id,index)">{{item.cat_name}}</a>
					</li>
				</ul>
			</div>
		<!-- <router-link to="/good_list">/user/foo</router-link> -->
			<div class="cate_right" ref="cate_right">
				<div class="cate_right_box">
					<a href="categories.children.cat_name" class="banner">
						<img :src="categories.cat_icon" alt="">
					</a>
					<div class="hot-category"  v-for="(item,index) in categories.children" :key="index">
						<h3><router-link :to="'/good_list/' + item.cat_id">{{item.children.cat_name}}</router-link></h3>                    
						<ul class="clearfix">
							<li v-for="product in item.products" :key="product.inedx">
								<router-link :to="'/detail/' + product._id">
									<img :src="categories.children.cat_icon" alt="" width="300">
								</router-link>
							</li>
						</ul>                    
					</div>
				</div>
			</div>
  </div>
  
  

</div>
   
</template>

<script>
import {getCategory} from "../../network/home";
import NavBar from 'components/common/navbar/NavBar'
import Search from 'components/common/search/Search'

export default {
  name: "Category",
  components:{
    NavBar,
    Search
    
    },
created() {
  this.getCategory()
  this.getHomeSearch()
  this.getqSearch()
},
data (){
  return {
    categories:[],
    search:[],
    qsearch:{}

  }
},
created() {
    this.getCategory()
  },
methods: {
    getCategory() {
      getCategory().then(res => {
        this.categories = res.message
        console.log(res)
      })
    },
     getHomeSearch() {
      getHomeSearch().then(res => {
        this.search = res.message
        console.log(res)
      })
    },
    getqSearch() {
      getqSearch().then(res => {
        this.qsearch = res.message
        console.log(res)
      })
    }

  },
  
}


</script>

<style >
.home-nav{
  background-color: #f00420;
  color:#fff;
}
.catemain{
  margin-top: 100px;
}

body{
	background: #fff;
}
.jd_category{
	position: fixed;
	width: 100%;
	height: 100%;
}
.jd_category{
	position: fixed;
	width: 100%;
	height: 100%;
}
.jd_main{
	width: 100%;
	height: 100%;
}
/* 左侧分类 */
.cate_left{
	width: 90px;
	height: 100%;
	float: left;
}
.cate_left ul{
	width: 90px;
}
.cate_left ul li{
	width: 100%;
	height: 50px;
	text-align: center;
	line-height: 50px;
	border-right:1px solid #ccc;
	border-bottom:1px solid #ccc;
	background: #f3f3f3;
	font-size: 12px;
}
.cate_left ul li a{
	display: block;;
}
.cate_left ul li.now{
	border-right: none;
	background: #fff;
}
.cate_left ul li.now a{
	color: #d8505c;
}
/* 右侧商品 */
.cate_right{
	overflow: hidden;
    height:100%;
}
.cate_right_box{
	width: 100%;	
	padding: 0px 10px;
	padding-bottom: 70px;
}
.cate_right_box .banner{
	margin-top: 10px;
	width: 100%;
	display: block;
}
.cate_right_box .banner img{
	display: block;;
	width: 100%;
}
.cate_right_box .hot-category{
	margin-top: 10px;
}
.cate_right_box .hot-category h3{
    display: block;
	font-size: 12px;
    height: 16px;
    line-height: 16px;
    background: rgb(243, 243, 243)
}
.cate_right_box .hot-category ul{
	width: 100%;
	padding: 10px 0;
}
.cate_right_box .hot-category ul li{
	width: 33.3333%;
	float: left;
	margin-top: 8px;
}
.cate_right_box .hot-category ul li a{
	width: 100%;
	display: block;
	text-align: center;
}
.cate_right_box .hot-category ul li a img{
	display: block;
	width: 60px;
	height: 60px;
	margin:0 auto;
}
.cate_right_box .hot-category ul li a p{
	text-align: center;;
	padding: 5px 0;
	font-size: 12px;
	color: #666;
}
.show{
	display: block;
}
.hide{	
	display: none;
}
</style>