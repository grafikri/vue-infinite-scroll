import { getStatusChangesOfScroll } from './logic'

const directive = {
  inserted(el, binding) {
    el.onscroll = (event) => {
      const status = getStatusChangesOfScroll(event.target)
      if (status !== "stable") {
        binding.value(status)
      }
    }
  }
}

export default directive