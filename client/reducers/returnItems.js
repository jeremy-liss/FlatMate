function returnItems (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_ITEMS':

      return [
        ...action.list
      ]

    case 'ADD_BILL':

      return [ ...state, action.payload]

    case 'ADD_ITEM':

      return [ ...state, action.payload]

    default:
      return state
  }
}

export default returnItems
