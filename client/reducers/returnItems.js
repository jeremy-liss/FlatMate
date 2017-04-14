function returnItems (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_ITEMS':

      return [
        ...action.list
      ]

    default:
      return state
  }
}

export default returnItems
