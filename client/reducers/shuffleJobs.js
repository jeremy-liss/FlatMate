function shuffleJobs (state = [], action) {
  switch (action.type) {
    case 'SHUFFLE_JOBS':

      return [
        ...action.list
      ]

    default:
      return state
  }
}

export default shuffleJobs
