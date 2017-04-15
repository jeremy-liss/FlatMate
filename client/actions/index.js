import request from 'superagent'

export const receiveItems = (items) => {
  return {
    type: 'RECEIVE_ITEMS',
    list: items.map(item => item)
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

// export function addItem (ev) {
//   // console.log(ev.target.elements[0].value);
//   var newItem = {item: ev.target.elements[0].value}
//   postItem(newItem)
// }

export function postItem (ev) {
  console.log(ev.target.elements[0].value)
  return (dispatch) => {
    request
      .post(`http://localhost:3000/api/addShoppingListItem`)
      .send({item: ev.target.elements[0].value})
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receiveItems(res.body))
      })
  }
}
