### [DEMO & DOCS](https://vue-infinite-scroll.netlify.app/)

![vue infinite scroll demo](https://media.giphy.com/media/RKBlxPP2G2orD2Udgi/giphy.gif)


## Install

1. Install package
```bash
npm i @grafikri/vue-infinite-scroll
```
2. Register it as vue plugin
> Don't forget it register before create an Vue instance. [here](https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin)
```js
import VueInfiniteScroll from "@grafikri/vue-infinite-scroll"
Vue.use(VueInfiniteScroll)
```
3. Start to use it as directive in component
```vue
<template>
  <div v-infinite-scroll="{ onEnter, onLeave, distance: 100 }">
    This is my long content
  </div>
</template>

<script>
export default {
  name: "MyCustomComponent",
  methods: {
    onEnter() {
      // do something
    },
    onLeave() {
      // do something
    },
  },
}
</script>
```

## Options

### Properties

#### distance

The distance means space between view's and scroll's bottom positions. The value of distance is pixel.

_Default:_ `200`

> Required: `false`

### Methods

#### onEnter

The method when view's bottom appear.

> Required: `true` on DOM

#### onLeave

The method when view's bottom leave.

> Required: `true` on DOM
