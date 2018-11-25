import * as React from 'react';
import SearchBar from 'antd-mobile/lib/search-bar';
import 'antd-mobile/lib/search-bar/style/css';
import Carousel from 'antd-mobile/lib/carousel';
import 'antd-mobile/lib/carousel/style/css';
import Grid from 'antd-mobile/lib/grid';
import 'antd-mobile/lib/grid/style/css';
import { WhiteSpace } from 'antd-mobile';
import './style.less';
import banner3 from './../../static/media/VCG41N637110064.jpg';
import banner2 from './../../static/media/VCG41N758556621.jpg';
import banner1 from './../../static/media/VCG41104245191.jpg'

const data1 = [
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    title: '挑战AT极限',
    date: '交易时间：2018-11-13',
    sum: '交易金额：￥985',
    percent: Math.floor(Math.random()*100)
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    title: '加州全球项目',
    date: '交易时间：2018-11-13',
    sum: '交易金额：￥985',
    percent: Math.floor(Math.random()*100)
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    title: 'USER项目',
    date: '交易时间：2018-11-13',
    sum: '交易金额：￥985',
    percent: Math.floor(Math.random()*100)
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    title: '挑战AT极限',
    date: '交易时间：2018-11-13',
    sum: '交易金额：￥985',
    percent: Math.floor(Math.random()*100)
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    title: '挑战AT极限',
    date: '交易时间：2018-11-13',
    sum: '交易金额：￥985',
    percent: Math.floor(Math.random()*100)
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    title: '挑战AT极限',
    date: '交易时间：2018-11-13',
    sum: '交易金额：￥985',
    percent: Math.floor(Math.random()*100)
  },
];

const data2 = [
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    title: 'Punch交易',
    date: '交易时间：2018-11-11',
    sum: '交易金额：￥582',
    percent: Math.floor(Math.random()*100)
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    title: 'BTA交易项目',
    date: '交易时间：2018-11-12',
    sum: '交易金额：￥582',
    percent: Math.floor(Math.random()*100)
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    title: 'Punch交易',
    date: '交易时间：2018-11-11',
    sum: '交易金额：￥582',
    percent: Math.floor(Math.random()*100)
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    title: 'BTA交易项目',
    date: '交易时间：2018-11-12',
    sum: '交易金额：￥582',
    percent: Math.floor(Math.random()*100)
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    title: 'Punch交易',
    date: '交易时间：2018-11-11',
    sum: '交易金额：￥582',
    percent: Math.floor(Math.random()*100)
  },
  {
    icon: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    title: 'BTA交易项目',
    date: '交易时间：2018-11-12',
    sum: '交易金额：￥582',
    percent: Math.floor(Math.random()*100)
  }
];

class Find extends React.Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
      data: [banner1, banner2, banner3],
      imgHeight: 230
    }
  }

  public render() {
    return (
      <div>
        <SearchBar
          placeholder="输入搜索项目"
          maxLength={10}
        />

        <Carousel
          autoplay={true}
          infinite={true}
          autoplayInterval={3000}
          dotStyle={{
            background: '#fff'
          }}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="javascript:;"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight}}
            >
              <img
                src={val}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({imgHeight: 'auto'});
                }}
              />
            </a>
          ))}
        </Carousel>

        <div className="sub-title">项目分类</div>
        <Grid data={data1}
          columnNum={3}
          square={false}
          renderItem={dataItem => (
            <div style={{ padding: '13px' }}>
              <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
              <div style={{marginTop: '10px'}}>
                <span>{dataItem.title}</span>
              </div>
            </div>
          )}
        />

        <WhiteSpace size="sm" />
        <WhiteSpace size="xl" />

        <div className="sub-title">交易分类</div>
        <Grid data={data2}
          columnNum={3}
          square={false}
          renderItem={dataItem => (
            <div style={{ padding: '13px' }}>
              <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
              <div style={{marginTop: '10px'}}>
                <span>{dataItem.title}</span>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Find
