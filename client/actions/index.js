import request from 'superagent'

export const receiveItems = (items) => {
  return {
    type: 'RECEIVE_ITEMS',
    list: items.map(item => item)
  }
}

export const receiveUsers = (users) => {
  return {
    type: 'RECEIVE_USERS',
    list: users.map(user => user)
  }
}

export const receiveBillAllocations = (allocations) => {
  return {
    type: 'RECEIVE_ALLOCATIONS',
    list: allocations.map(allocation => allocation)
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

export function fetchUsers () {
  return (dispatch) => {
    request
      .get(`http://localhost:3000/api/users`)
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receiveUsers(res.body))
      })
  }
}

export function fetchBillAllocations () {
  return (dispatch) => {
    request
      .get(`http://localhost:3000/api/bill_allocations`)
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receiveBillAllocations(res.body))
      })
  }
}

export function postItem (formData, table) {
  return (dispatch) => {
  request
    .post(`http://localhost:3000/api/${table}`)
    .send(formData)
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(receiveItems(res.body))
    })
  }
}

export function delItem (id, table) {
  return (dispatch) => {
    request
    .delete(`http://localhost:3000/api/${table}`)
    .send({id: id})
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(receiveItems(res.body))
    })
  }
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
