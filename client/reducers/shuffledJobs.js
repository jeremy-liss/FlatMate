function shuffleJobs (state = ["Vacuum", "Dishes", "Trash", "Bathroom", "Mow Lawn", "Clean Kitchen"], action) {
  switch (action.type) {
    case 'SHUFFLE_JOBS':

    state = action.chores.sort(function(a,b) {
      return 0.5 - Math.random()
    })

    return state

    default:
      return state
  }
}

export default shuffleJobs
