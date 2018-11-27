import * as React from 'react';
import TabBar from 'antd-mobile/lib/tab-bar';
import 'antd-mobile/lib/tab-bar/style/css';
import { renderRoutes } from 'react-router-config';
import styles from "./style.less"
import { connect } from 'react-redux';

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
      fullScreen: false,
      headText: '主页'
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
  
  // react生命周期里面setstate
  // https://juejin.im/entry/5af0396351882567236eb022

  componentWillReceiveProps(nextProps) {

      const path = nextProps.location.pathname
      setTimeout(() => {
        if(path && path.indexOf(this.state.selectedTab) > 0){
          switch( path ) {
            case '/home':
              this.setState({
                headText: '主页'
              })
              break;
            case '/find':
              this.setState({
                headText: '发现'
              })
              break;
            case '/msg':
              this.setState({
                headText: '消息'
              })
              break;
            case '/mine':
              this.setState({
                headText: '我的'
              })
              break;
          }
        }
      }, 100)
  }

  render() {
    return (
      <div>
        <div className={styles.wrapHead}>
          {this.state.headText}
        </div>
        <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 ,paddingTop:'40px'}}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#5e69c7"
            barTintColor="white"
            hidden={this.state.hidden}
          >

            <TabBar.Item
              title="首页"
              key="home"
              icon={<div
                className="iconfont icon-zhuye"
                style={{
                  fontSize: '24px',
                  marginTop: '-7px'
                }}
              />
              }
              selectedIcon={<div
                className="iconfont icon-zhuye"
                style={{
                  fontSize: '24px',
                  marginTop: '-7px',
                  color: '#5e69c7'
                }}
              />
              }
              selected={this.state.selectedTab === 'home'}
              // badge={1}
              onPress={() => {
                this.props.history.push("/home");
                this.setState({
                  selectedTab: 'home'
                });
              }}
              data-seed="logId"
            >
              {this.renderContent('home')}
            </TabBar.Item>

            <TabBar.Item
              icon={
                <div 
                  className="iconfont icon-faxian1"
                  style={{
                    fontSize: '24px',
                    marginTop: '-7px'
                  }}
                />
              }
              selectedIcon={
                <div 
                  className="iconfont icon-faxian1"
                  style={{
                    fontSize: '24px',
                    marginTop: '-7px'
                    color: '#5e69c7'
                  }}
                />
              }
              title="发现"
              key="find"
              // badge={'new'}
              selected={this.state.selectedTab === 'find'}
              onPress={() => {
                this.props.history.push("/find")
                this.setState({
                  selectedTab: 'find'
                });
              }}
              data-seed="logId1"
            >
              {this.renderContent('find')}
            </TabBar.Item>

            <TabBar.Item
              icon={
                <div
                  className="iconfont icon-xiaoxi1"
                  style={{
                    fontSize: '24px',
                    marginTop: '-7px'
                  }}
                />
              }
              selectedIcon={
                <div 
                  className="iconfont icon-xiaoxi1"
                  style={{
                    fontSize: '24px',
                    marginTop: '-7px',
                    color: '#5e69c7'
                  }}
                />
              }
              title="消息"
              key="message"
              // dot
              selected={this.state.selectedTab === 'msg'}
              onPress={() => {
                this.props.history.push("/msg")
                this.setState({
                  selectedTab: 'msg'
                });
              }}
            >
              {this.renderContent('message')}
            </TabBar.Item>

            <TabBar.Item
              icon={
                <div
                  className="iconfont icon-gerenzhongxin"
                  style={{
                    fontSize: '24px',
                    marginTop: '-7px'
                  }}
                />
              }
              selectedIcon={
                <div 
                  className="iconfont icon-gerenzhongxin"
                  style={{
                    fontSize: '24px',
                    marginTop: '-7px',
                    color: '#5e69c7'
                  }}
                />
              }
              title="我的"
              key="mine"
              selected={this.state.selectedTab === 'mine'}
              onPress={() => {
                this.props.history.push("/mine")
                this.setState({
                  selectedTab: 'mine'
                });
              }}
            >
              {this.renderContent('mine')}
            </TabBar.Item>

          </TabBar>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    homelist: state.homelist
  }
}

export default connect(
  mapStateToProps
)(TabBarExample)