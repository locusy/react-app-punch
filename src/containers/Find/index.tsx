import * as React from 'react';
import SearchBar from 'antd-mobile/lib/search-bar';
import 'antd-mobile/lib/search-bar/style/css';
import Carousel from 'antd-mobile/lib/carousel';
import 'antd-mobile/lib/carousel/style/css';
import WingBlank from 'antd-mobile/lib/wing-blank';
import 'antd-mobile/lib/wing-blank/style/css';
import './style.css'

class Find extends React.Component<any, any>{
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176
    }
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  public render() {
    return (
      <div>
        <SearchBar
          placeholder="Search"
          maxLength={10}
        />

        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            // afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      </div>
    );
  }
}

export default Find
