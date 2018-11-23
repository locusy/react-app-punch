import * as React from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import styles from './style.less'

const msgData = [
  {
    isRead: false,
    category: '警告',
    date: '2018-09-09',
    content: '预警!您进行的交易存在风险，请注意您的资金安全'
  },
  {
    isRead: false,
    category: '成功提示',
    date: '2018-09-09',
    content: '恭喜您！您已经交易成功！交易金额是￥12736，请注意账户变动'
  },
  {
    isRead: false,
    category: '风险',
    date: '2018-09-09',
    content: '风险提示!您进行的交易存在风险，请注意您的资金安全'
  },
  {
    isRead: false,
    category: '失败提示',
    date: '2018-09-09',
    content: '抱歉!您的交易存在违规操作，请重新提交申请'
  }
]

const tabs = [
  { title: <Badge text={'300'}>未读消息</Badge> },
  { title: <Badge>已读消息</Badge> }
];

class Msg extends React.Component<any, any>{
  public render() {
    // const toReadList = (

    // )
    return (
      <div>
        <Tabs 
          tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { return }}
          onTabClick={(tab, index) => { return }}
        >
          <div className={styles.msgList}>
            <div className={styles.msgBox}>
                <div className={styles.MsgDate}>
                  <span>[警告]</span>
                  <span>2018-09-09 12:09:09</span>
                </div>
                <div className={styles.MsgCont}>预警!您进行的交易存在风险，请注意您的资金安全</div>
            </div>

            <div className={styles.msgBox}>
              <div className={styles.MsgDate}>
                <span>[警告]</span>
                <span>2018-09-09 12:09:09</span>
              </div>
              <div className={styles.MsgCont}>预警!您进行的交易存在风险，请注意您的资金安全</div>
            </div>

            <div className={styles.msgBox}>
                <div className={styles.MsgDate}>
                  <span>[警告]</span>
                  <span>2018-09-09 12:09:09</span>
                </div>
                <div className={styles.MsgCont}>预警!您进行的交易存在风险，请注意您的资金安全</div>
            </div>
          </div>


          <div className={styles.msgList}>
            <div className={styles.msgBox}>
              <div className={styles.MsgDate}>
                <span>[警告]</span>
                <span>2018-09-09 12:09:09</span>
              </div>
              <div className={styles.MsgCont}>预警!您进行的交易存在风险，请注意您的资金安全</div>
            </div>
            
            <div className={styles.msgBox}>
                <div className={styles.MsgDate}>
                  <span>[警告]</span>
                  <span>2018-09-09 12:09:09</span>
                </div>
                <div className={styles.MsgCont}>预警!您进行的交易存在风险，请注意您的资金安全</div>
            </div>
            <div className={styles.msgBox}>
              <div className={styles.MsgDate}>
                <span>[警告]</span>
                <span>2018-09-09 12:09:09</span>
              </div>
              <div className={styles.MsgCont}>预警!您进行的交易存在风险，请注意您的资金安全</div>
            </div>

            <div className={styles.msgBox}>
                <div className={styles.MsgDate}>
                  <span>[警告]</span>
                  <span>2018-09-09 12:09:09</span>
                </div>
                <div className={styles.MsgCont}>预警!您进行的交易存在风险，请注意您的资金安全</div>
            </div>

          </div>
        </Tabs>
      </div> 
    );
  }
}

export default Msg
