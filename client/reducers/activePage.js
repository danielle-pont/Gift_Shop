// TODO: add active page property to the redux store through making a reducer.

import { NAVIGATE } from '../actions/actionList'

const initState = 'home'

function activeReducer(state = initState, action) {
  switch (action.type) {
    case NAVIGATE:
      return action.payload
    default:
      return state
  }
}

export default activeReducer
