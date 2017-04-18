import request from 'superagent'

export const receiveItems = (items, table) => {
  return {
    type: 'RECEIVE_ITEMS',
    list: items.map(item => item),
    table
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

export const shuffleJobs = (chores) => {
  return {
    type: 'SHUFFLE_JOBS',
    chores: ["Vacuum", "Dishes", "Trash", "Bathroom", "Mow Lawn", "Clean Kitchen"]
  }
}

export const receiveFlatUsers = (flatUsers) => {
  return {
    type: 'RECEIVE_FLAT_USERS',
    list: flatUsers.map(user => user)
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
      dispatch(receiveItems(res.body, table))
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

export function fetchFlatUsers () {
  return (dispatch) => {
    request
    .get(`http://localhost:3000/api/flatusers`)
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(receiveFlatUsers(res.body))
    })
  }
}

export function fetchBillAllocations () {
  return (dispatch) => {
    request
    .get(`http://localhost:3000/api/billallocations`)
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(receiveBillAllocations(res.body))
    })
  }
}

export function postAllocation (newAmount) {
  return (dispatch) => {
    request
    .post(`http://localhost:3000/api/updateallocation`)
    .send({amount: newAmount})
    .end((err, res) => {
      if (err) {
        return
      }
      callback(null, res.body)
    })
  }
}

export function postShuffledJobs (object) {
  return (dispatch) => {
    request
    .post(`http://localhost:3000/api/updatejobs`)
    .send(object)
    .end((err, res) => {
      if (err) {
        return
      }
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
  })
}

export function updateEmail (id, newestEmail) {
  return (dispatch) => {
    request
    .put(`http://localhost:3000/api/updateemail`)
    .send({id: id, newEmail: newestEmail})
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(receiveFlatUsers(res.body))
    })
  }
}

export function addUserToFlat (ev) {
  ev.preventDefault(ev)
  return (dispatch) => {
    request
      .put(`http://localhost:3000/api/updateflatid`)
      .send({email: ev.target.elements[0].value, flat_id: 1001})
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receiveFlatUsers(res.body))
      })
  }
}

export function removeFlattie (userEmail) {
  return (dispatch) => {
    request
      .put(`http://localhost:3000/api/updateflatid`)
      .send({email: userEmail, flat_id: null})
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receiveFlatUsers(res.body))
      })
  }
}
