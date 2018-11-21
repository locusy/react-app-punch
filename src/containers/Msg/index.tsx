import * as React from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile'

const tabs = [
  { title: <Badge>未读</Badge> },
  { title: <Badge>已读</Badge> }
];

class Msg extends React.Component<any, any>{
  public render() {
    return (
      <div>
         <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div style={{backgroundColor: '#fff' }}>
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
              未读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
              未读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
              未读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
              未读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
              未读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
              未读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
              未读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
              未读消息
            </div>
            <WhiteSpace size="sm" />
          </div>
          <div style={{backgroundColor: '#fff' }}>
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
              已读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
            已读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
            已读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
            已读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
              已读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
              已读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
              已读消息
            </div>
            <WhiteSpace size="sm" />
            <div style={{height: '50px', background: 'rgba(0,0,0,0.2)', width: '100%'}}> 
              已读消息
            </div>
            <WhiteSpace size="sm" />
          </div>
        </Tabs>
        <WhiteSpace size="sm" />
      </div> 
    );
  }
}

export default Msg
