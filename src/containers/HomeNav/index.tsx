import * as React from 'react';
import { Link } from 'react-router-dom';
import { getItem } from './../../utils/localStorage'
const styles = require('./style.less');

export interface IState {
  userName: string
}

export default class HomeNav extends React.Component<any, IState, any>{
  constructor(props){
    super(props)
    this.state = {
      userName: ''
    }
    this.signOut = this.signOut.bind(this)
  }
  componentDidMount() {
    this.setState({
      userName : getItem('username')
    })
  }
  public render() {
    const { userName } = this.state
    return (
      <div className={styles.homeTop}>
        <span  className={styles.navbtn + ' flr'}>
          <i className={styles.iconfont + ' icon-quit'}></i>
          <a onClick={this.signOut}>退出</a>
        </span>
        <span  className={styles.navbtn + ' flr'}>
          <i className={styles.iconfont + ' icon-personal'}></i>
          <a>{userName}</a>
        </span>
      </div>
    );
  }
  signOut() {
    localStorage.clear()
    this.props.history.push("/login")
  }
}