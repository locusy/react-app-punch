import * as React from 'react';
import { Button } from 'antd';
import FormConfig from '../../components/FormConfig'
import FormModal from '../../components/FormModal'
const styles = require('./style.less')

export interface IProps {
  config: Object
}

export interface IState {
  visible: boolean,
  homeTab?: string,
}

class HomeMain extends React.Component<IProps, IState, any>{
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      homeTab: ''
    }
  }
  showForm = () => {
    this.setState({
      visible: true
    })
  }
  hideForm = () => {
    this.setState({
      visible: false
    })
  }
  public render() {
    return (
      <div className={styles.homeMain}>
        <FormModal
          config={this.props.config} 
          visible={this.state.visible} 
          hideForm={this.hideForm}
        ></FormModal>
        
        <div className={styles.homeLeft}>
          <div className={'section ' + styles.tabNav}>
            <div className={styles.userInfo} >
              <div>
                <Button type="primary" className={styles.addBtn} onClick={this.showForm}>添加项目</Button>
                <Button type="primary" className={styles.addBtn} onClick={this.showForm}>添加基金</Button>
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default FormConfig(HomeMain)