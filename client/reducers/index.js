import { combineReducers } from 'redux'

import items from './items'
import shuffledJobs from './shuffledJobs'
import returnFlatUsers from './returnFlatUsers'

export default combineReducers({
  items,
  returnFlatUsers,
  shuffledJobs
})
