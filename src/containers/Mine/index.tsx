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
                <b>简介：前端 文艺 完美 </b>
              </span>
            </div>
            <div className={styles.Numbers}>
              <div>作品<br/>132</div>
              <div>粉丝<br/>87</div>
              <div>点赞<br/>123</div>
              <div>关注<br/>123</div>
            </div>
         </div> 

         <div>
          <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
            <Accordion.Panel header="我的创作">
                <List className="my-list">
                  <List.Item>BTA交易项目</List.Item>
                  <List.Item>BTA交易项目</List.Item>
                  <List.Item>BTA交易项目</List.Item>
                </List>
              </Accordion.Panel>
              <Accordion.Panel header="我的收藏">
                <List className="my-list">
                  <List.Item>BTA交易项目</List.Item>
                  <List.Item>BTA交易项目</List.Item>
                  <List.Item>BTA交易项目</List.Item>
                </List>
              </Accordion.Panel>
              <Accordion.Panel header="参与挑战" className="pad">
                BTA交易项目
              </Accordion.Panel>
              <Accordion.Panel header="参与项目" className="pad">
              BTA交易项目
              </Accordion.Panel>
              <Accordion.Panel header="设置" className="pad">
               待定
              </Accordion.Panel>
            </Accordion>
        </div>

      </div> 
    );
  }
}

export default Mine
