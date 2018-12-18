import React, { Component } from 'react';
import { Pop, Button, Input } from 'zent';
import './style';

class ZentPopDemo1 extends Component {
  render() {
    return (
      <div className="zent-doc-pop-container">
        <Pop trigger="hover" content="鼠标移入触发方式">
          <Button type="primary">移入鼠标</Button>
        </Pop>
        <Pop trigger="click" content="鼠标点击触发方式">
          <Button type="primary">点击鼠标</Button>
        </Pop>
        <Pop trigger="focus" content="获得输入焦点触发方式">
          <Input defaultValue="点击获取焦点" />
        </Pop>
      </div>
    );
  }
}

export default ZentPopDemo1;
