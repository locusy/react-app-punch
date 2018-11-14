import { MENU_FLATARR } from '../constants'
import { menuFlatAction } from '../actions'
import { MenuFlatState } from '../types'

const initialState = {
  menuFlatArr : []
}

export default function menuData(state: MenuFlatState = initialState, action: menuFlatAction):MenuFlatState {
  switch(action.type) {
    case MENU_FLATARR:
      return {
        ...state,
        menuFlatArr: action.data
      }
  }
  return state
}
