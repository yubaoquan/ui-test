import React, { Component } from 'react';
import CommonStage from './common';
import popDemos from '../demos/pop';

const stages = [
  { name: '三种触发方式: 点击, 鼠标移入, 获得输入焦点' },
  { name: '12种定位' },
  { name: '使用 centerArrow 来控制气泡小三角形的位置' },
  { name: 'Confirm 形式的气泡提示' },
  { name: '自定义 Confirm 形式的气泡提示按钮' },
  { name: '延迟打开 / 关闭' },
  { name: '外部控制显示 / 隐藏' },
  { name: 'widthPop 高阶组件' },
];

class PopStage extends Component {
  render() {
    return (
      <CommonStage name="pop" demos={popDemos} stages={stages} />
    )
  }
}
export default PopStage;
