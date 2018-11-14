import * as React from 'react';
import { getMenuList } from './../../fetch/api'

const ArrToTree = (WrappedComponent) => {
  class newComponent extends React.Component <any, any> {
      constructor(props) {
          super(props);
          this.state = {
            flagArr: []
          };
          this.arrToTree = this.arrToTree.bind(this);
          this.getFlagArr = this.getFlagArr.bind(this)
        }

        arrToTree = (id: number) :Array<Object> => {
          const { flagArr } = this.state
          var temp = []
          for (var index in flagArr) {
            if (flagArr[index].pid == id) {
              temp.push({
                data: flagArr[index],
                children: this.arrToTree(flagArr[index].id)
              });
              temp.sort((a, b):any => {
                let a_val  = a.data.seq
                let b_val  = b.data.seq
                return (a_val - b_val)
              })
            }
          }
          return temp
        }

        getFlagArr = () => {
          getMenuList({}).then((res: any) => {
            if(res.code === 200){
              this.setState({
                flagArr: res.payload
              })
            }
          })
          .catch((err) => {
            console.log(err)
          })
        }

        componentDidMount() {
          // this.getFlagArr()
        }
        
        render() {
            return <WrappedComponent history={this.props.history} treeArr={this.arrToTree(0)}/>
        }
  }

  return newComponent
}

export default ArrToTree