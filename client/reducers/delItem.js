function delItem (state = [], action) {
  switch (action.type) {
    case 'DEL_ITEM':

    state = action.chores.sort(function(a,b) {
      return 0.5 - Math.random()
    })

    return state

    default:
      return state
  }
}

export default delItem
