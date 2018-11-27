import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { getHomeList } from './../../fetch/api';
import Toast from 'antd-mobile/lib/toast';
import 'antd-mobile/lib/toast/style/css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from './../../actions'
import * as constants from './../../constants'

class App extends React.Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
    }
    this.getHomeListFunc = this.getHomeListFunc.bind(this)
  }
  getHomeListFunc = () => {
    const params = {}
    getHomeList(params).then((res:any) => {
      this.props.allActions.HomeListAct({
        type: constants.HOME_LIST,
        data: res.data
      })
    })
    .catch((err) => {
      Toast.fail('首页列表信息加载失败', 1);
    })
  }
  componentWillMount() {
    this.getHomeListFunc()
  }
  public render() {
    return (
      <div style={{height:'100%'}}>{renderRoutes(this.props.route.routes)}</div> 
    );
  }
}

function mapStateToProps(state) {
  return {
    homelist: state.homelist
  }
}

function mapDispatchToProps(dispatch) {
  return {
    allActions: bindActionCreators(allActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
