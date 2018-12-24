import React, { Component } from 'react';
import CommonStage from './common';
import notifyDemos from '../demos/notify';

const stages = [
  { name: '基础用法' },
  { name: '通过 config 调整全局默认时间' },
  { name: '自定义通知显示时间' },
  { name: '自定义通知内容' },
  { name: '自定义通知结束回调' },
];

class NotifyStage extends Component {
  render() {
    return (
      <CommonStage name="notify" demos={notifyDemos} stages={stages} />
    )
  }
}
export default NotifyStage;
