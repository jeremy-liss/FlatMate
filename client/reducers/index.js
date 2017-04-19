import { combineReducers } from 'redux'

import items from './items'
import shuffledJobs from './shuffledJobs'
import flatUsers from './flatUsers'

export default combineReducers({
  items,
  flatUsers,
  shuffledJobs
})
