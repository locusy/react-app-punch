import * as React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import SearchBar from 'antd-mobile/lib/search-bar';
import 'antd-mobile/lib/search-bar/style/css';
import ListView from 'antd-mobile/lib/list-view';
import 'antd-mobile/lib/list-view/style/css';
import Progress from 'antd-mobile/lib/progress'
import 'antd-mobile/lib/progress/style/css';
import './style.less';

/* eslint no-dupe-keys: 0 */
class HomeMain extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      data: [],
      dataSource,
      isLoading: true,
    };
    this.genData = this.genData.bind(this)
  }

  genData = (pIndex = 0) => {
    const NUM_ROWS = 30;
    let pageIndex = 0;
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
      const ii = (pIndex * NUM_ROWS) + i;
      dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
  } 

  toListItem = (rowID) => {
    // this.props.history.push('./home/' + rowID)
    return
  }

  componentWillMount(nextProps) {
    setTimeout(() => {
      this.setState({
          data: this.props.homelist.HomeListArr.data
      });
    }, 600)
  }

  componentDidMount() {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = this.genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }
  
  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...this.genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }

  render() {
    const { data } = this.state
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#efeff4',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <div key={rowID} onClick={this.toListItem.bind(this, rowID)} style={{ padding: '0 15px' }}>
          <div
            style={{
              lineHeight: '40px',
              color: '#888',
              fontSize: 15,
              textAlign: 'left',
              borderBottom: '1px solid #F6F6F6',
            }}
          >{obj.title}</div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
            <img style={{ height:'64px', width:'60px', marginRight:'15px' }} src={obj.img} alt="" />
            <div style={{ lineHeight: 1 }}>
              <div style={{ marginBottom: '10px', fontWeight: 'bold', textAlign: 'left' }}>{obj.date}</div>
              <div style={{ marginBottom: '10px', fontWeight: 'bold', textAlign: 'left' }}>{obj.sum}</div>
              <div style={{ marginBottom: '10px', fontWeight: 'bold', textAlign: 'left' }}>
                <span>项目进度:</span>
                <Progress 
                 percent={obj.percent}
                 position="normal"
                 style={{
                   borderRadius: '5px',
                   background: 'rgba(0, 0, 0, 0.2)',
                   border: '1px solid rgba(0, 0, 0, 0.1)'
                 }}
                 />
              </div>
            </div>
          </div>
        </div>
      );
    };
    return (
      <div>
        <SearchBar
          placeholder="输入搜索项目"
          maxLength={10}
        />

        <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderHeader={() => (<span></span>)}
          renderFooter={() => (<div style={{ fontSize: '13px', padding: 5, textAlign: 'center',background: this.state.isLoading ? '': '#efeff4'; }}>
            {this.state.isLoading ? 'Loading...' : '没有更多啦~'}
          </div>)}
          renderRow={row}
          renderSeparator={separator}
          className="am-list"
          pageSize={4}
          useBodyScroll
          onScroll={() => { return }}
          scrollRenderAheadDistance={500}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
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
)(HomeMain)
