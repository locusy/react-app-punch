import * as React from 'react';
import TabBar from 'antd-mobile/lib/tab-bar';
import 'antd-mobile/lib/tab-bar/style/css';
import { renderRoutes } from 'react-router-config';
import "./style.css"

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >

          <TabBar.Item
            title="首页"
            key="home"
            icon={<div
              className="iconfont icon-zhuye"
              style={{
              width: '22px',
              height: '22px'}}
            />
            }
            selectedIcon={<div
              className="iconfont icon-zhuye"
              style={{
              width: '22px',
              height: '22px',
              color: 'rgb(51, 163, 244)'
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab'
              });
              this.props.history.push("/home")
            }}
            data-seed="logId"
          >
            {this.renderContent('home')}
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div 
                className="iconfont icon-faxian"
                style={{
                width: '22px',
                height: '22px'
              }}
              />
            }
            selectedIcon={
              <div 
                className="iconfont icon-faxian"
                style={{
                width: '22px',
                height: '22px',
                color: 'rgb(51, 163, 244)'
              }}
              />
            }
            title="发现"
            key="find"
            // badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
              this.props.history.push("/find")
            }}
            data-seed="logId1"
          >
            {this.renderContent('find')}
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div
                className="iconfont icon-xiaoxi"
                style={{
                  width: '22px',
                  height: '22px'
                }}
              />
            }
            selectedIcon={
              <div 
                className="iconfont icon-xiaoxi"
                style={{
                  width: '22px',
                  height: '22px',
                  color: 'rgb(51, 163, 244)'
                }}
              />
            }
            title="消息"
            key="message"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
              this.props.history.push("/msg")
            }}
          >
            {this.renderContent('message')}
          </TabBar.Item>

          <TabBar.Item
            icon={
              <div
                className="iconfont icon-gerenzhongxin"
                style={{
                  width: '22px',
                  height: '22px'
                }}
              />
            }
            selectedIcon={
              <div 
                className="iconfont icon-gerenzhongxin"
                style={{
                  width: '22px',
                  height: '22px',
                  color: 'rgb(51, 163, 244)'
                }}
              />
            }
            title="我的"
            key="mine"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
              this.props.history.push("/mine")
            }}
          >
            {this.renderContent('mine')}
          </TabBar.Item>

        </TabBar>
      </div>
    );
  }
}

export default TabBarExample