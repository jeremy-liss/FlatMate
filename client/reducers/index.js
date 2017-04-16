import { combineReducers } from 'redux'

import returnItems from './returnItems'
import shuffleJobs from './shuffleJobs'

export default combineReducers({
  returnItems,
  shuffleJobs
})
