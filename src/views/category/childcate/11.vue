<template>
  <div id="category">
     <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
     <search></search>
     <div class="content">
       <tab-menu :categories="categories"></tab-menu>
     </div>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
import Search from "components/common/search/Search"
import TabMenu from "./childcate/TabMenu"
export default {
  name:"Category",
  components: {
    NavBar,
    Search,
    TabMenu
  },
  data() {
    return {
      categories: [],
    }
  },
  careated() {
    this.getCategory()
  },

  methods: {
    getCategory() {
     getCategory().then(res => {
        this.categories = res.message
        console.log(res)
      })
    },
  }
}
</script>

<style scoped>
  #category {
    height: 100vh;
  }
  .nav-bar {
    background-color: #f00420;
    font-weight: 700;
    color: #fff;
  }


</style>