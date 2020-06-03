<template>
<div>
  <nav-bar class="home-nav"><div slot="center">分类页</div></nav-bar>
  <search></search>
  <div class="catemain">
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
  this.getCategory ()
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

</style>