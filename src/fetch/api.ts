import { get, post } from './axios'

export function Signin(params: Object) :Promise<{}> {
  return post('/auth/signin', params)
}

export function getHomeList(params: Object) :Promise<{}> {
  return get('/homelist', params)
}

export function getMsgList(params: Object) :Promise<{}> {
  return get('/msgdata', params)
}

