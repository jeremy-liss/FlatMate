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

export const getId = (id) => {
  console.log(id);
  return {
    type: 'GET_ID',
    id: id
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
    .post(`http://localhost:3000/api/addshoppinglistitem`)
    .send({item: ev.target.elements[0].value})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}

export function delItem (id, callback) {
  request
  .delete(`http://localhost:3000/api/delShoppingListItem`)
  .send({id: id})
  .end((err, res) => {
    if (err) {
      return
    }
    callback(null, res.body)
  })
}

export function postEvent (ev, callback) {
  ev.preventDefault(ev)
  request
    .post(`http://localhost:3000/api/addevent`)
    .send({date: ev.target.elements[1].value, event: ev.target.elements[0].value})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}

export function deleteEvent (id, callback) {
  request
    .delete(`http://localhost:3000/api/delevent`)
    .send({id: id})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}

export function postUser (object, callback) {

  request
    .post(`http://localhost:3000/api/adduser`)
    .send(object)
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}

export function deleteUser (id, callback) {
  request
    .delete(`http://localhost:3000/api/deluser`)
    .send({id: id})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
}
