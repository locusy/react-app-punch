import * as constants from '../constants'

// hello
export interface IIncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface IDecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;

export function incrementEnthusiasm(): IIncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    }
}

export function decrementEnthusiasm(): IDecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    }
}

// 用户权限
export interface userPermissonAction {
    type: constants.USER_PERMISSION,
    data: Array<any>
}
export function userPermisson(data): userPermissonAction {
    return {
        type: constants.USER_PERMISSION,
        data
    }
}

// 菜单信息
export interface menuFlatAction {
    type: constants.MENU_FLATARR,
    data: Array<any>
}
export function menuFlat(data): menuFlatAction{
    return {
        type: constants.MENU_FLATARR,
        data
    }
}

// home页列表
export interface HomeListAction {
    type: constants.HOME_LIST,
    data: Array<any>
}

export function HomeListAct(data): HomeListAction{
    return {
        type: constants.HOME_LIST,
        data
    }
}

// message页列表
export interface MsgListAction {
    type: constants.MSG_LIST,
    data: Array<any>
}

export function MsgListAct(data): MsgListAction{
    return {
        type: constants.MSG_LIST,
        data
    }
}
