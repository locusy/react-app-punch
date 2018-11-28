import { MSG_LIST } from '../constants'
import { MsgListAction } from '../actions'
import { MsgListState } from '../types'

const initialState = {
  MsgListArr: []
}

export default function msglist(state: MsgListState = initialState, action: MsgListAction): MsgListState {
  switch(action.type) {
    case MSG_LIST:
      return { 
        ...state, 
        MsgListArr: action.data
      }
  }
  return state
}