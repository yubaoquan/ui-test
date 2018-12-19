import React, { Component } from 'react';
import CommonStage from './common';
import popDemos from '../demos/pop';

const stages = [
  { name: '三种触发方式: 点击, 鼠标移入, 获得输入焦点' },
];

class PopStage extends Component {
  render() {
    return (
      <CommonStage name="pop" demos={popDemos} stages={stages} />
    )
  }
}
export default PopStage;
