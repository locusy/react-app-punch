import { USER_PERMISSION } from '../constants'
import { userPermissonAction } from '../actions'
import { UserPermiseState } from '../types'

const initialState = {
  UserPermiseList: []
}

export default function homelist(state: UserPermiseState = initialState, action: userPermissonAction): UserPermiseState {
  switch(action.type) {
    case USER_PERMISSION:
      return { 
        ...state, 
        UserPermiseList: action.data
      }
  }
  return state
}