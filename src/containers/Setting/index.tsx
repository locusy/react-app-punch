import * as React from 'react';
import { Checkbox, Button } from 'antd';
import { connect } from 'react-redux';
const styles = require('./style.less')

export interface IState {
  checked: boolean,
  checkedo: boolean,
  checkedt: boolean,
  userPermissionList: Array<any>
}

class Setting extends React.Component<any, IState, any>{
  constructor(props) {
    super(props)
    this.state = {
      checked: true,
      checkedo: true,
      checkedt: true,
      userPermissionList: []
    }
    this.filterShowCode = this.filterShowCode.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onChangeo = this.onChangeo.bind(this)
    this.onChangt = this.onChangt.bind(this)
  }
  componentWillMount() {
    this.setState({
      userPermissionList: this.props.permission.UserPermiseList.data
    })
  }
  filterShowCode = (code: string):any => {
    if(this.state.userPermissionList && this.state.userPermissionList.length>0){
      const result = this.state.userPermissionList.some((item:any):boolean => {
         return item.code == code
      })
      return result
    }
  }
  onChange = (e) => {
    this.setState({
      checked: e.target.checked,
    })
  }
  onChangeo = (e) => {
    this.setState({
      checkedo: e.target.checked
    })
  }
  onChangt = (e) => {
    this.setState({
      checkedt: e.target.checked
    })
  }
  public render() {
    return (
      <div className={styles.setting}>
          <div className={"section"}>
            角色：456
          </div>
          <div className={"section clearfix " + styles.setTable}>
          {/* <Button className={'fll'} style={{display: this.filterShowCode('555') ? 'block' : 'none',margin: '10px 10px'}} type="primary">查看内部子基金列表</Button>
            <Button className={'fll'} style={{display: this.filterShowCode('777') ? 'block' : 'none',margin: '10px 10px'}} type="primary">查看母基金列表</Button> */}
            <Button className={'fll'} style={{display: this.state.checked ? 'block' : 'none',margin: '10px 10px'}} type="primary">查看内部子基金列表</Button>
            <Button className={'fll'} style={{display: this.state.checkedo ? 'block' : 'none',margin: '10px 10px'}} type="primary">查看母基金列表</Button>
            <Button className={'fll'} style={{display: this.filterShowCode('888') ? 'block' : 'none',margin: '10px 10px'}} type="primary">查看权限列表</Button>
            <Button className={'fll'} style={{display: this.filterShowCode('999') ? 'block' : 'none',margin: '10px 10px'}} type="primary">查看模块列表</Button>
            <Button className={'fll'} style={{display: this.filterShowCode('1003') ? 'block' : 'none',margin: '10px 10px'}} type="primary">查看角色列表</Button>
            <Button className={'fll'} style={{display: this.state.checkedt ? 'block' : 'none',margin: '10px 10px'}} type="primary">查看全部项目列表</Button>
            {/* <Button className={'fll'} style={{display: this.filterShowCode('111') ? 'block' : 'none',margin: '10px 10px'}} type="primary">查看全部项目列表</Button> */}
            <Button className={'fll'} style={{display: this.filterShowCode('222') ? 'block' : 'none',margin: '10px 10px'}} type="primary">查看拟投项目列表</Button>
          </div>
          <div className={"section " + styles.setTable}>
            <div>
              <Checkbox
                checked={this.state.checked}
                onChange={this.onChange}
              >
                查看内部子基金列表权限
              </Checkbox>
              <Checkbox
                checked={this.state.checkedo}
                onChange={this.onChangeo}
              >
                查看母基金列表权限
              </Checkbox>
              <Checkbox
                checked={this.state.checkedt}
                onChange={this.onChangt}
              >
                查看全部项目列表权限
              </Checkbox>
            </div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    permission: state.permission
  }
}

export default connect(
  mapStateToProps
)(Setting)