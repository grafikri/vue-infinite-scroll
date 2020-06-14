import { getStatusChangesOfScroll } from './logic'
import defaults from './defaults'

const directive = {
  inserted(el, binding) {

    const options = { ...defaults, ...binding.value }

    binding.value = options

    el.onscroll = (event) => {
      const status = getStatusChangesOfScroll(event.target, options)
      if (status !== "stable") {
        status === "enter" ? binding.value.onEnter() : binding.value.onLeave()
      }
    }
  }
}

export default directive