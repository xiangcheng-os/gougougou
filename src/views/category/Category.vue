<template>
  <div id="category">
     <nav-bar><div slot="center">商品分类</div></nav-bar>
     <search></search>
     <div class="content">
       <div class="categoryleft">
         <category-menu :message="categories"
                @detailClick="detailClick"></category-menu>
       </div>
       <div class="categoryright">
         <category-detail :itemData="itemData"></category-detail>
       </div>
     </div>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Search from "components/common/search/Search"
import CategoryMenu from "./childcate/CategoryMenu"
import CategoryDetail from "./childcate/CategoryDetail"


import {getCategory} from "../../network/category"
export default {
  name:"Category",
  components: {
    NavBar,
    Search,
    CategoryMenu,
    CategoryDetail
   
  },
  data() {
    return {
      categories: [],
      itemData: []
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
    detailClick(index) {
      this.itemData =this.categories[index].children
    }
  }
}
</script>

<style scoped>
  #category {
    height: 100vh;
  }
  .content {
    display: flex;
  }
 


</style>