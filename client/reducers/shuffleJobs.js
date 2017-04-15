function shuffleJobs (state = ["Vacuum", "Dishes", "Trash"], action) {
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
