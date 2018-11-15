import * as React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { getHomeList } from './../../fetch/api'
import SearchBar from 'antd-mobile/lib/search-bar';
import 'antd-mobile/lib/search-bar/style/css';
import ListView from 'antd-mobile/lib/list-view';
import 'antd-mobile/lib/list-view/style/css';

class Home extends React.Component<any, any>{
  constructor(props) {
    super(props)
    this.getHomeListData = this.getHomeListData.bind(this)
  }

  getHomeListData() {
    var params = {
      id: 1
    }
    getHomeList(params).then((res: any) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentWillMount() {
    this.getHomeListData()
  }

  public render() {
    return (
      <div style={{height:'50%',width:'100%',color:'#000'}}>
        {/* 搜索框 */}
        <SearchBar
          placeholder="Search"
          maxLength={10}
          onSubmit={value => console.log(value, 'onSubmit')}
          onClear={value => console.log(value, 'onClear')}
          onFocus={() => console.log('onFocus')}
          onBlur={() => console.log('onBlur')}
          onCancel={() => console.log('onCancel')}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Home
