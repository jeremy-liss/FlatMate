function returnAllocations (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_ALLOCATIONS':

      return [
        ...action.list
      ]

    default:
      return state
  }
}

export default returnAllocations
