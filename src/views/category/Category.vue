<template>
<div>
  <nav-bar class="home-nav"><div slot="center">商品分类</div></nav-bar>
  
  

</div>
   
</template>

<script>
import {getCategory} from "../../network/home";
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "Category",
  components:{
    NavBar,
    
    },
  created() {
  this.getCategory ()
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

<style >
.home-nav{
  background-color: #f00420;
  color:#fff;
}

</style>