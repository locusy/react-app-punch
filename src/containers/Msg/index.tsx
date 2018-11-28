import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { connect } from 'react-redux';
import styles from './style.less'

export interface IState {
  MsgData: Array<any>;
  unRead: Array<any>;
  Readed: Array<any>;
}
class Msg extends Component<any, IState>{
  constructor(props) {
    super(props);
    this.state = {
      MsgData: [],
      unRead: [],
      Readed: []
    }
  }

  changReadStatus = (isRead, index) => {
    if( !isRead ){
      this.state.unRead[index].isRead = true
    }
    this.setState({
      MsgData: [...this.state.unRead, ...this.state.Readed],
      unRead: this.state.MsgData.filter((item: any) => {
        return !item.isRead
      })
      Readed: this.state.MsgData.filter((item: any) => {
        return item.isRead
      })
    })
  }

  componentWillMount() {
    const MsgData = this.props.msglist.MsgListArr.data
    const unRead = MsgData.filter((item: any) => {
      return !item.isRead
    })
    const Readed = MsgData.filter((item: any) => {
      return item.isRead
    })
    this.setState({
      MsgData: MsgData,
      unRead: unRead,
      Readed: Readed
    })
  }

  render() {
    const { unRead, Readed} = this.state
    const tabs = [
      { title: <Badge text={unRead.length}>未读消息</Badge> },
      { title: <Badge text={Readed.length}>已读消息</Badge> }
    ];
    return (
      <div>
        <Tabs 
          tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { return }}
          onTabClick={(tab, index) => { return }}
        >
          <div className={styles.msgList}>
            {
              unRead.map((item: any, index: number) => {
                return (
                  <div 
                    className={styles.msgBox} 
                    key={index} 
                    onClick={this.changReadStatus.bind(this, item.isRead, index)}
                  >
                    <div className={styles.MsgDate}>
                      <span>{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <div className={styles.MsgCont}>{item.content}</div>
                  </div>
                )
              })
            }
          </div>

          <div className={styles.msgList}>
            {
              Readed.map((val: any, index: number) => {
                return (
                  <div className={styles.msgBox} key={index}>
                    <div className={styles.MsgDate}>
                      <span>{val.category}</span>
                      <span>{val.date}</span>
                    </div>
                    <div className={styles.MsgCont}>{val.content}</div>
                  </div>
                )
              })
            }
          </div>

        </Tabs>
      </div> 
    );
  }
}

function mapStateToProps(state) {
  return {
    msglist: state.msglist
  }
}

export default connect(
  mapStateToProps
)(Msg)
