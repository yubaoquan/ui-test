import React, { Component } from 'react';
import { Form, Icon, Pop } from '@ybq/ui';
import '@ybq/ui/dist/form/index.css';
const { InputField: FormInputField } = Form;

class SDemo extends Component {
  render() {
    return (
      <Form horizontal>
        <FormInputField
          name="name"
          type="text"
          label={
            <span>
              用户名&nbsp;
              <Pop trigger="hover" content="用户名用于个人账号登录" centerArrow>
                <Icon type="error-circle-o" />
              </Pop>:
            </span>
          }
          helpDesc="用户名为5-25个字符"
          required
        />
        <FormInputField
          name="password"
          type="password"
          label="密码:"
          helpDesc={
            <span>
              密码由6-20位英文字母、数字组成，
              <a href="https://youzan.com" target="_blank">
                查看更多
              </a>
            </span>
          }
          notice="重要提示：填写后无法修改，请谨慎设置"
          required
        />
      </Form>
    );
  }
}

export default SDemo;
