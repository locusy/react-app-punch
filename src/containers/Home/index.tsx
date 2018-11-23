import * as React from 'react';
import TabBar from 'antd-mobile/lib/tab-bar';
import 'antd-mobile/lib/tab-bar/style/css';
import { renderRoutes } from 'react-router-config';
import styles from "./style.less"

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
      <div>
        <div className={styles.wrapHead}>
          首页
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
      </div>
    );
  }
}

export default TabBarExample