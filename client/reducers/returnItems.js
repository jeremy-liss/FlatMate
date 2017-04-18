let initialState = {
  users: [],
  jobs: [],
  events: [],
  bills: [],
  shopping_list_items: []
}

function returnItems (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
    let newState = {}
    newState.users = state.users
    newState.jobs = state.jobs
    newState.events = state.events
    newState.bills = state.bills
    newState.shopping_list_items = state.shopping_list_items
    newState[action.table] = action.list
      return newState

    default:
      return state
  }
}

export default returnItems
