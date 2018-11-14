import * as React from 'react';
import { Link } from 'react-router-dom';
// import ArrToTree from './../../components/ArrToTree'
import _ from 'lodash';
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;
const styles = require('./style.less');

export interface IProps {
  history: any,
  menuData: Array<any>
}

export interface IState {
  treeArr: Array<any>
}

class HomeMenu extends React.Component<IProps, IState>{
  constructor(props) {
    super(props)
    this.state = {
      treeArr: []
    };
    this.arrItemFunc = this.arrItemFunc.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log(this.props.menuData)
    console.log(this.props.menuData.length)
  }

  arrItemFunc = (treeArr) => _.map(treeArr, (item, index) => {
    if(item.children && item.children.length === 0){
      return (
        <Menu.Item key={item.data.id} url={item.data.url}>
          <i className={styles.iconfont + ' icon-zhuye'}></i>
          <span>{item.data.name}</span>
        </Menu.Item>
      )
    }else if(item.children && item.children.length > 0){
      return (
        <SubMenu key={item.data.id} title={
          <span>
            <i className={styles.iconfont + ' icon-jijin'}></i>
            <span>{item.data.name}</span>
          </span>
        }>
          {this.arrItemFunc(item.children)}
        </SubMenu>
      )
    }
  })

  handleClick = (e) => {
    // console.log(e.item.props.url)
    if(e.item.props.url == './setting'){
      this.props.history.push(e.item.props.url)
    }
    return false
  }

  public render() {
    const { treeArr } = this.state
    const MenuItem = this.arrItemFunc(treeArr)
    return (
      <div className={styles.homeMenu}>
        <div className={styles.logoBtn}>
          <i className={styles.logoImg}></i>
          <span><Link to="./">投资云系统</Link></span>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={false}
          onClick={this.handleClick}
        >
          {MenuItem}
        </Menu>
      </div>
    );
  }
}

export default HomeMenu