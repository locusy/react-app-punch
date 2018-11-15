import { get, post } from './axios'

export function Signin(params: Object) :Promise<{}> {
  return post('/auth/signin', params)
}

export function getRefreshToken(params: Object) :Promise<{}> {
  return get('/api/v1/token/refresh', params)
}

export function getHomeList(params: Object) :Promise<{}> {
  return get('/list', params)
}

