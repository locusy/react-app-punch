import { HOME_LIST } from '../constants'
import { HomeListAction } from '../actions'
import { HomeListState } from '../types'

const initialState = {
  HomeListArr: []
}

export default function homelist(state: HomeListState = initialState, action: HomeListAction): HomeListState {
  switch(action.type) {
    case HOME_LIST:
      return { 
        ...state, 
        HomeListArr: action.data
      }
  }
  return state
}