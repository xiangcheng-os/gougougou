<template>
  <div class="search-main">
    <div class="search-bar">
      <input type="text" class="search-input" placeholder="搜索">
    </div>
    <!-- <div class="search-list hot-search">
      <p class="search-list-title">
        热门搜索
      </p>
      <ul class="search-list-words">
        <li class="search-list-word" v-for="w in words" :key="w">{{w}}</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  name:"Search.vue",
  components:{

  },

}
</script>

<style scoped>
.search-bar{
  position: relative;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#f00420 ;
}
.search-input{
  width: 100%;
  height: 34px;
  outline: none;
  border: none;
  text-indent: 3em;
  background-color: #F4F4F4;
  border-radius: 10px;
  
}
          
/* .search-list{
    padding: 0 20px;
    box-sizing: border-box;
 }           
 .search-list-title{
  font-size: 16px;
  margin: 20px auto;
  margin-bottom: 10px;
  text-align: left;
  }
  .search-list-words{
      display: flex;
      flex-wrap: wrap;
  }
  .search-list-word{
      padding: 6px 16px;
      background: #F4F4F4;
      border-radius: 8px;
      margin: 6px 10px;
      margin-left: 0;;
  } */
            

</style>