import request from 'superagent'

export const receiveItems = (items) => {
  return {
    type: 'RECEIVE_ITEMS',
    list: items.map(item => item)
  }
}

export const shuffleJobs = () => {
  return {
    type: 'SHUFFLE_JOBS',
    chores: ["Vacuum", "Dishes", "Trash"]
  }
}

export function fetchItems (table) {
  return (dispatch) => {
    request
      .get(`http://localhost:3000/api/${table}`)
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receiveItems(res.body))
      })
  }
}

export function postItem (ev, callback) {
  ev.preventDefault(ev)
  request
    .post(`http://localhost:3000/api/addShoppingListItem`)
    .send({item: ev.target.elements[0].value})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}
