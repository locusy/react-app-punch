import axios from 'axios';
import { setItem, getItem } from '../utils/localStorage';
import createHistory from 'history/createBrowserHistory';
import moment from 'moment'

// axios.defaults.baseURL = 'http://192.168.31.217:8089'
axios.defaults.baseURL = 'http://localhost:2000'

const accessToken = getItem('accessToken')
const refreshToken = getItem('refreshToken')
const expireTime = Number(getItem('expireTime'))
const loginTime = moment(getItem('loginTime'))
const deadTime = moment().subtract(expireTime, 'seconds')
// token过期 刷新
if(loginTime.isBefore(deadTime) && expireTime) {
  axios({
    url: '/auth/token/refresh',
    params: {
      'refreshToken': refreshToken
    }
  })
  .then((res) => {
    setItem('accessToken', res.data.payload.accessToken)
    setItem('refreshToken', res.data.payload.refreshToken)
    setItem('expireTime', Number(res.data.payload.expireIn) + expireTime)
  })
  .catch((err) => {
    return Promise.reject(err)
  })
}

axios.interceptors.request.use(
  config => {
    if(accessToken) {
      config.headers.Authorization = 'Bearer ' + accessToken;
    } 
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    return response
  },
  error => {  
    if (error.code) {
      switch (error.code) {
        case 401:
        // 清除token 重新登录
        localStorage.clear()
        createHistory().push('./login')
      }
    }
    return Promise.reject(error)
  }
)

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
    .then(
      (res) => {
        resolve(res.data)
      },
      (err) => {
        reject(err)
      }
    )
    .catch((error) => {
      reject(error)
    })
  })
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
    .then(
      (res) => {
        resolve(res.data)
      },
      (err) => {
        reject(err)
      }
    )
    .catch((error) => {
      reject(error)
    })
  })
}