import { get, post } from './axios'

export function Signin(params: Object) :Promise<{}> {
  return post('/auth/signin', params)
}

export function getMenuList(params: Object) :Promise<{}> {
  return post('/api/v1/moudle/list', params)
}

export function getRefreshToken(params: Object) :Promise<{}> {
  return get('/api/v1/token/refresh', params)
}

export function userInfo(params: Object) :Promise<{}> {
  return post('/api/v1/users/code', params)
}

export function userPermission(params: Object) :Promise<{}> {
  return post('/api/v1/permissions/querybyuser/list', params)
}

