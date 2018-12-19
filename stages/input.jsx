import React, { Component } from 'react';
import inputDemos from '../demos/input';
import CommonStage from './common';

const stages = [
  { name: '基本用法' },
  { name: '带前后缀的输入框' },
  { name: 'textarea输入框' },
  { name: 'textarea输入框加计数器' },
  { name: '事件处理' },
  { name: '显示清除按钮' },
  { name: '主动调用 focus 和 select 方法' },
  { name: '不可编辑状态' },
  { name: 'autoFocus, autoSelect, initSelectStart, initSelectEnd' },
];

class InputStage extends Component {
  render() {
    return (
      <CommonStage name="input" demos={inputDemos} stages={stages} />
    );
  }
}

export default InputStage;
