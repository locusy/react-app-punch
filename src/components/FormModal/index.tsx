import * as React from 'react';
import {Form, Modal, Input, Select, InputNumber, Switch, Radio, Slider, Button, Upload, Icon, Rate} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
const Option = Select.Option;
const FormItem = Form.Item

export interface IProps extends FormComponentProps {
  form: any,
  config: any,
  visible: boolean,
  hideForm: Function
}

export interface IState {
  loading: boolean
}

class FormModal extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }
  public render() {
    const config  = this.props.config
    const { loading } = this.state
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <div>
        <Modal
          visible={this.props.visible}
          title={`添加${config.desc}`}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>{config.cancelTxt}</Button>,
            // <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>{this.props.config.okTxt}</Button>,
          ]}
        >
          <Form onSubmit={this.handleSubmit}>
            {
              config.data.map( (item:any, index:number) => {
                return (
                  <div key={index}>
                    {/* input */}
                    <FormItem
                      {...formItemLayout}
                      label={item.desc}
                      style={item.uiType == 'input' ? {display: 'block'} : {display: 'none'}}
                    >
                      {getFieldDecorator('input', { 
                        rules: [{
                          type: 'string', message: 'The input is not valid E-mail!',
                        }, {
                          required: true, message: 'Please input your E-mail!',
                        }],
                      })(
                        <input />
                      )}
                    </FormItem>

                    {/* input-number  */}
                    <FormItem
                      {...formItemLayout}
                      label={item.desc}
                      style={item.uiType == 'InputNumber' ? {display: 'block'} : {display: 'none'}}
                    >
                      {getFieldDecorator('input-number', { initialValue: 3 })(
                        <InputNumber min={item.min} max={item.max} />
                      )}
                      <span className="ant-form-text">金额</span>
                    </FormItem>

                    {/* select  */}
                    <FormItem
                      {...formItemLayout}
                      label={item.desc}
                      hasFeedback
                      style={item.uiType == 'select' ? {display: 'block'} : {display: 'none'}}
                    >
                      {getFieldDecorator('select', {
                        rules: [
                          { required: true, message: 'Please select your country!' },
                        ],
                      })(
                        <Select placeholder="Please select a country">
                          <Option value="china">China</Option>
                          <Option value="use">U.S.A</Option>
                        </Select>
                      )}
                    </FormItem>

                    {/* select-multiple  */}
                    <FormItem
                      {...formItemLayout}
                      label={item.desc}
                      style={item.uiType == 'select-multiple' ? {display: 'block'} : {display: 'none'}}
                    >
                      {getFieldDecorator('select-multiple', {
                        rules: [
                          { required: true, message: 'Please select your favourite colors!', type: 'array' },
                        ],
                      })(
                        <Select mode="multiple" placeholder="Please select favourite colors">
                          <Option value="red">Red</Option>
                          <Option value="green">Green</Option>
                          <Option value="blue">Blue</Option>
                        </Select>
                      )}
                    </FormItem>

                    {/* switch  */}
                    <FormItem
                      {...formItemLayout}
                      label={item.desc}
                      style={item.uiType == 'switch' ? {display: 'block'} : {display: 'none'}}
                    >
                      {getFieldDecorator('switch', { valuePropName: 'checked' })(
                        <Switch />
                      )}
                    </FormItem>

                    {/* upload  */}
                    <FormItem
                      {...formItemLayout}
                      label={item.desc}
                      extra=""
                      style={item.uiType == 'upload' ? {display: 'block'} : {display: 'none'}}
                    >
                      {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                      })(
                        <Upload name="logo" action="/upload.do" listType="picture">
                          <Button>
                            <Icon type="upload" /> Click to upload
                          </Button>
                        </Upload>
                      )}
                    </FormItem>

                  </div>
                )
              })
            }
          </Form>
        </Modal>
      </div>
    )
  }
  handleOk = () => {
    this.setState({
      loading: true
    })
    setTimeout(() => {
      this.setState({
        loading: false
      })
      this.props.hideForm()
    })
  }
  handleCancel = () => {
    this.props.hideForm()
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  componentWillMount() {
    console.log(this.props.config)
  }
}

export default Form.create()(FormModal)
