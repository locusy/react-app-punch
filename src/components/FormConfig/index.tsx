//高阶组件: 一个函数，该函数接受一个组件作为参数，并返回一个新的组件
import * as React from 'react';

const FormConfig = (WrappedComponent) => {
  class newComponent extends React.Component <any, any> {
      constructor(props) {
          super(props);
          this.state = {
              config: {
                id: 1, // ID
                moduleId: 1, // 对应模块ID
                code: 'user', // form对应key
                desc: '用户', // 中文注释
                rowNum: 2, // 每行展示多少个表单元素 遵循24删格原则
                width: 960, // 表单宽度
                okTxt: '保存', // 保存按钮文案 默认保存
                cancelTxt: '取消', // 取消按钮文案 默认取消
                data: [
                    {
                        id: 1, // ID
                        code: 'name', // 编码，对应数据字段
                        desc: '项目名称：', // form label 对应展示的文字
                        type: 'string', // 类型，string, number, datetime, file, richTxt, currency, boolean, textarea(currency, file, richTxt为特殊类型)
                        uiType: 'input', // ui控件类型，input，inputNumber，select, date, dateTime, file, radio, checkbox, switch
                        required: false, // 是否必须
                        default: 'smith', // 默认值
                        formaters: {
                        format: 'YYYY-MM-DD HH:mm:ss', // date类型格式化 默认 YYYY-MM-DD HH:mm:ss
                        trim: true, // 是否去除空格 默认true
                        },
                        validators: {
                            minLen: 2, // 最小长度
                            maxLen: 10, // 最大长度
                            min: 0, // number类型最小值
                            max: 100, // number类型最大值
                            special: 0, // 特殊格式， 如用户名，邮箱，手机号，url， 身份证号。。。回头商议个枚举列表出来
                        },
                        options: {
                            values: [ // uiType为select时的数据源
                                {
                                    label: '选项1',
                                    value: 1
                                }
                            ],
                            valueQuery: `
                                query users {
                                    users(type: ENABLE) {
                                        userList: {
                                            id, name
                                        }
                                    }
                                }
                            `, // uiType为select时数据源api，同values互斥
                            richTxtOutPut: 'markdown', // 富文本输出格式 html 或者 markdown 前端童鞋关注下 https://github.com/rexxars/react-markdown 这个项目
                            dataKey: 'data.users.userList', // 列表路径
                            labelKey: 'name', // select控件label对应的字段
                            valueKey: 'id', // select控件value对应的字段
                            mutiple: true, // select是否为多选
                            step: 0.01, // number 时的步进
                            degree: 4, // 浮点数精度,表示精确到小数点后几位,
                            ossBucket: 'user', // oss bucket地址，文件类型需要
                            ossAuthQuery: `
                                query ossWriteAuth{
                                    ossWriteAuth {
                                        bucket,
                                        authToken,
                                    }
                                }
                            `, // oss auth 查询语句 type 为 file 或者 richTxt 需要
                            ossAuthKey: 'data.ossWriteAuth', // oss result key, type 为 file 或者 richTxt 需要
                            treeView: false, // 是否为树形下拉框
                            relatedKey: 'legend', // 本组件变化会影响到哪个组件
                            controlers: ['email'], // 受控于哪些组件
                            addOnBefore: {
                            type: 'component', // component, template, 也有可能是从props传过来的。。。
                            component: { // 配置同本组件
                            },
                            template: {
                                valueQuery: `
                                    query relatedPeople {
                                    relatedPeople {
                                        id, firstName
                                    }
                                    }
                                `, // html 文本变量替换查询语句
                                valueKey: 'data.relatedPeople',
                                content: `
                                <div>
                                    value.firstName
                                </div>
                                `,
                            }
                            }, // input 或inputNumber 前面对应的组件, html 或者Object类型
                            addOnAfter: null, // input 或inputNumber 之后对应的组件, html 或者Object类型, 同上
                            disabledStart: 'now', // date组件开始时间，在此时间以前的不可选择, now 或者 date 类型
                            disabledEnd: '2018-02-05',  // date组件结束时间，在此时间以前的不可选择, now 或者 date 类型
                            disabledStartRelatedKey: 'startDate', // 关联的开始时间，受控与所关联Key的组件，同 disabledStart互斥，且优先级高于 disabledStart
                            currencyQuery: `
                            query currency {
                                currency {
                                id, unit_cn, unit_sym
                                }
                            }
                            `, // 货币类型查询语句
                            currencyLabel: 'unit_cn', // 货币类型展示的key值
                            currencyObj: false, // 货币类型是否以对象形式传输 如果为true, 前端需注意graphql查询语句拼写格式
                        }
                    },
                    {
                        id: 3, // ID
                        desc: '项目类型：',
                        type: 'string',
                        uiType: 'select', 
                        default: 'smith',
                        url: '',
                    },
                    {
                        id: 3, // ID
                        desc: '参与人：',
                        type: 'array', 
                        uiType: 'select-multiple', 
                        default: 'smith', // 默认值
                    },
                    {
                        id: 3, // ID
                        desc: '开关：', 
                        type: 'boolean',
                        uiType: 'switch', 
                        default: 'smith', 
                    },
                    {
                        id: 3, // ID
                        desc: '上传文件：', 
                        type: 'array', 
                        uiType: 'upload', 
                        default: 'smith',
                    }
                ]   
              }
            }
        }

        render() {
            return <WrappedComponent config={this.state.config}/>
        }
  }

  return newComponent
}

export default FormConfig