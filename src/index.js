import directive from './directive'

const install = function (Vue, options) {
  directive.initialDefaults = options
  Vue.directive("infinite-scroll", directive)
}

export default {
  install
}