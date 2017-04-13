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
      .get(`http://www.http://localhost:3000/api/shopping-list-items`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveItems(res.body))
      })
  }
}
