import directive from './directive'

const install = function (Vue) {
  Vue.directive("my-scroll", directive)
}

export default {
  install
}