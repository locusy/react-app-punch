import * as React from 'react';
import { Accordion, List } from 'antd-mobile';
import styles from './style.less';

class Mine extends React.Component<any, any>{
  constructor(props) {
    super(props);
  }
  onChange = (key) => {
    console.log(key);
  }
  public render() {
    return (
      <div>
         <div className={styles.myHead}>
            <div className={styles.myHeadBox}>
              <span className={styles.avator}>avator</span>
              <span className={styles.brief}>
                <h1>我的小小天空</h1>
                <b>简介：啦啦啦啦</b>
              </span>
            </div>
            <div className={styles.Numbers}>
              <span>作品<br/>132</span>
              <span>粉丝<br/>87</span>
              <span>点赞<br/>123</span>
              <span>关注<br/>123</span>
            </div>
         </div> 

         <div style={{ marginTop: 10, marginBottom: 10 }}>
          <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
            <Accordion.Panel header="我的创作">
                <List className="my-list">
                  <List.Item>content 1</List.Item>
                  <List.Item>content 2</List.Item>
                  <List.Item>content 3</List.Item>
                </List>
              </Accordion.Panel>
              <Accordion.Panel header="我的收藏">
                <List className="my-list">
                  <List.Item>content 1</List.Item>
                  <List.Item>content 2</List.Item>
                  <List.Item>content 3</List.Item>
                </List>
              </Accordion.Panel>
              <Accordion.Panel header="我的挑战" className="pad">
                this is panel content2 or other
              </Accordion.Panel>
              <Accordion.Panel header="我的项目" className="pad">
                text text text text text text text text text text text text text text text
              </Accordion.Panel>
              <Accordion.Panel header="设置" className="pad">
                text text text text text text text text text text text text text text text
              </Accordion.Panel>
            </Accordion>
        </div>

      </div> 
    );
  }
}

export default Mine
