import * as React from 'react';
import axios from 'axios';
import { Route, Switch, NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as totalActions from '../../actions';
import { userPermission, getMenuList } from '../../fetch/api';
import { getItem } from './../../utils/localStorage';
import HomeMenu from '../HomeMenu';
import HomeNav from '../HomeNav';


export interface IState {
  menuData: any
} 

class Home extends React.Component<any, IState>{
  constructor(props) {
    super(props)
    this.state = {
      menuData: null
    }
    this.getUserPermisson = this.getUserPermisson.bind(this)
    this.getUserInfo = this.getUserInfo.bind(this)
    this.getFlagArr = this.getFlagArr.bind(this)
  }
  getUserInfo = () => {
    let code = getItem('username')
    axios({
      url: '/api/v1/users/code/' + Number(code),
      data: {
        "userCode": code
      }
    })
    .then((res: any) => {
        console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  getUserPermisson = () => {
    userPermission({}).then((res: any) => {
      if(res.code === 200){
        this.props.totalActions.userPermisson({
          type: 'USER_PERMISSION',
          data: res.payload
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }
  getFlagArr = () => {
    getMenuList({}).then((res: any) => {
      if(res.code === 200){
        this.setState({
          menuData: res.payload
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }
  componentWillMount() {
    // 获取用户id等信息
    this.getUserInfo()

    // 获取用户权限
    this.getUserPermisson()

    // 获取菜单树
    this.getFlagArr()

  }

  public render() {
    return (
      <div style={{height:'100%'}}>
        <HomeNav history={this.props.history}/>
        {
          this.state.menuData ? <HomeMenu menuData={this.state.menuData} history={this.props.history} /> : ''
        }
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    permission: state.permission,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    totalActions: bindActionCreators(totalActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
