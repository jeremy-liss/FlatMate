import request from 'superagent'

export const shuffleJobs = (jobs) => {
  return {
    type: 'SHUFFLE_JOBS',
    list: job.map(job => job)
  }
}

export function shuffleJobs () {
  return (dispatch) => {
    request
      .get('http://localhost:3000/?event=0043-02-01#/roster')
      .end((err, res) => {
        if (err) {
          return
        }
        dispatch(shuffleJobs(res.body))
      })
  }
}
