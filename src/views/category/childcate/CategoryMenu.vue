<template>
  <div class="menu">
    <ul>
      <li v-for="(item, index) in message" :key="index" 
      @click="itemClick(index)" 
      :class="{activeStyle:currentIndex == index}">
      {{item.cat_name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'CategoryMenu',
  data() {
    return {
      defaultItem: [],
      currentIndex: 0
    }
  },
  props : {
    message: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.$emit('detailClick', index)
      this.currentIndex = index
    }
  },
  updated() {
    if(this.currentIndex == 0){
      this.itemClick(0)
    }
  }

}
</script>

<style scoped>
  .menu {
    width: 106px;
    border-right: 1px solid #eee;

  }
  .menu li {
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .activeStyle {
    color:#f00420;
    border-left: 3px solid #f00420;
  }


</style>