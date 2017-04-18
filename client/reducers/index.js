import { combineReducers } from 'redux'

import returnItems from './returnItems'
import returnUsers from './returnUsers'
import shuffleJobs from './shuffleJobs'
import returnFlatUsers from './returnFlatUsers'

export default combineReducers({
  returnItems,
  returnUsers,
  returnFlatUsers,
  shuffleJobs
})
