function returnFlatUsers (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_FLAT_USERS':

      return [
        ...action.list
      ]

    default:
      return state
  }
}

export default returnFlatUsers
