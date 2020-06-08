<template>
<div>

    <div class="jd_main" >        
			<div class="cate_left" 
            ref="cate_left" 
            @click="itemClick(index)"
            :class="{active: index===currentIndex}">
				<ul>               
					<li v-for="(item,index) in categories" :key="index">
						<a href="categories.cat_name" v-bind:id="categories.cat_id" v-on:touchstart="cateright(categories.cat_id,index)">{{item.cat_name}}</a>
					</li>
				</ul>
			</div>
  </div>
  
  

</div>
   
</template>

<script>
import {getCategory} from "../../../network/home";


export default {
  name: "TabMenu",
  components:{
    
    
    },
created() {
  this.getCategory()
 
},
data (){
  return {
    categories:[],
    currentIndex: 0
  

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

    itemClick(index) {
      this.currentIndex = index
      this.$emit('selectItem',index)
    }
    
    

  },
  
}


</script>

<style scoped>
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
	background: #fff;
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

</style>