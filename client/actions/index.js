import request from 'superagent'

export const receiveItems = (items) => {
  return {
    type: 'RECEIVE_ITEMS',
    list: items.map(item => item)
  }
}

export function fetchItems () {
  return (dispatch) => {
    request
      .get(`http://localhost:3000/api/shopping-list-items`)
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receiveItems(res.body))
      })
  }
}
