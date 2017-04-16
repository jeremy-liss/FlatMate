import { combineReducers } from 'redux'

import returnItems from './returnItems'
import returnUsers from './returnUsers'
import shuffleJobs from './shuffleJobs'

export default combineReducers({
  returnItems,
  returnUsers,
  shuffleJobs
})
