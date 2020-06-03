<template>
  <div>
     <nav-bar class="home-nav"><div slot="center">分类页</div></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'Detail',
  components:{
    NavBar
  }

}
</script>

<style>
.home-nav{
  background-color: #f00420;
  color:#fff;
}

</style>