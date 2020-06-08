<template>
  <div class="category-detail">
    <div v-for="(item, index) in itemData" :key="index">
      <div class="title">/{{item.cat_name}}/</div>
      <div class="content">
        <div v-for="(item, indey) in item.children" :key="indey"
            class="content-item" 
            @click="itemClick(item.cat_name)">
            <img :src="item.cat_icon" alt="">
            <span>{{item.cat_name}}</span>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'CategoryMainCon',
  props:{
    itemData: {
      type:Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(name) {
      this.$router.push('/goodslist/' + name)
    }
  }

}
</script>

<style scoped>
  .category-detail {
    width: 268px;
  }
  .title {
    height: 42px;
    line-height: 42px;
    text-align: center;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
  }
  .content-item {
    height: 68px;
    width: 89px;

    font-size: 14px;
    text-align: center;
  }
  .content-item img {
    height: 40px;
  }
  .content-item span {
    display: block;
  }

</style>