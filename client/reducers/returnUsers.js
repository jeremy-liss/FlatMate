function returnUsers (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_USERS':

      return [
        ...action.list
      ]
      
    default:
      return state
  }
}

export default returnUsers
