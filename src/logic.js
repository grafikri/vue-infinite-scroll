const arrStatus = []

export const getStatusChangesOfScroll = function (el, options) {

  const { scrollTop, clientHeight, scrollHeight } = el
  let { distance } = el
  if (!distance) distance = options.distance

  let newVal
  let oldVal

  const result = scrollTop + clientHeight > scrollHeight - distance

  arrStatus.unshift(result)
  newVal = arrStatus[0]

  if (arrStatus.length === 2) {
    oldVal = arrStatus.pop()
  }

  // Preventing first out event
  if (oldVal === undefined) oldVal = false

  return oldVal === newVal ? "stable" : newVal ? "enter" : "out"

}



