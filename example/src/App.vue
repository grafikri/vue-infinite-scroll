<template>
  <div id="app">
    <p>↓ scroll this ↓</p>
    <div v-infinite-scroll="{onEnter, onLeave}"
         class="box">
         <div>
           <div class="item" v-for="(item, index) in items" :key="index">
             {{ index + 1 }}
           </div>
         </div>
         <div style="margin: 20px;">
           <img :src="preloader" />
         </div>
    </div>
  </div>
</template>

<script>

import loader from '../assets/preloader.gif'

export default {
  name: 'App',
  data(){
    return {
      preloader: loader,
      items: [],
    }
  },
  created(){
    this.items = " ".repeat(20).split("")
  },
  methods: {
    onEnter() {
      setTimeout(() => {
        const newItems = " ".repeat(10).split("")
        this.items.push(...newItems)
      },1000)
      console.log("app enter")
    },
    onLeave() {
      console.log("app out")
    },

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box {
  margin: auto; 
  width: 400px; 
  height: 400px;
  overflow:scroll;
  border: 1px solid;
}

.item{
  background: #ececec;
  margin: 1px;
  padding: 10px;
}
</style>
