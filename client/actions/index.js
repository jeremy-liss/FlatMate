import request from 'superagent'

export const receiveItems = (items, table) => {
  return {
    type: 'RECEIVE_ITEMS',
    list: items.map(item => item),
    table
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
    .get(`/api/${table}`)
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(receiveItems(res.body, table))
    })
  }
}

export function fetchFlatUsers () {
  return (dispatch) => {
    request
    .get(`/api/flatusers`)
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(receiveFlatUsers(res.body))
    })
  }
}

export function postShuffledJobs (object) {
  return (dispatch) => {
    request
    .post(`/api/jobs`)
    .send(object)
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(receiveItems(res.body, 'jobs'))
    })
  }
}

export function postItem (formData, table) {
  return (dispatch) => {
  request
    .post(`/api/${table}`)
    .send(formData)
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(receiveItems(res.body, table))
    })
  }
}

export function delItem (id, table) {
  return (dispatch) => {
    request
    .delete(`/api/${table}`)
    .send({id: id})
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(receiveItems(res.body, table))
    })
  }
}

export function postUser (object, callback) {
  request
  .post(`/api/adduser`)
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
    .put(`/api/updateemail`)
    .send({id: id, newEmail: newestEmail})
    .end((err, res) => {
      if (err) {
        return
      }
      dispatch(receiveFlatUsers(res.body))
    })
  }
}

export function updateFlatUsers (formData) {
  return (dispatch) => {
    request
      .put(`/api/flatusers`)
      .send(formData)
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(receiveFlatUsers(res.body))
      })
  }
}
