---
sidebarDepth: 2
---

## Install
1. Install package
```bash
npm i @grafikri/vue-infinite-scroll 
```

2. Register it as vue plugin
::: warning
 Don't forget it register before create an Vue instance. 
[here](https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin)
You don't need specify callback methods in this case.
:::
```js
import VueInfiniteScroll from '@grafikri/vue-infinite-scroll'
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
  name: 'MyCustomComponent',
  methods: {
    onEnter() {
      // do something
    },
    onLeave() {
      // do something
    }
  }
}
</script>
```

## Options


### Properties

#### distance
The distance means space between view's and scroll's bottom positions. The value of distance is pixel.

*Default:* `200`

### Methods

#### onEnter
The method when view's bottom appear.

#### onLeave
The method when view's bottom leave.



## Distance configuration
You can configure <code>distance</code> either way when you register plugin or define as directive. Defining on DOM has more priority.

### As global
```js
import VueInfiniteScroll from '@grafikri/vue-infinite-scroll'
Vue.use(VueInfiniteScroll, { distance: 100 })
```

### As local
```vue
<template>
  <div v-infinite-scroll="{ onEnter, onLeave, distance: 100 }">
    This is long content
  </div>
</template>
```

