import { NAVIGATE } from './actionList'

// action creators
export const navigate = (activePage) => {
  return {
    type: NAVIGATE,
    payload: activePage,
  }
}
