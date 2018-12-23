import React, { Component } from 'react';
import CommonStage from './common';
import notifyDemos from '../demos/notify';

const stages = [
  { name: '基础用法' },
];

class NotifyStage extends Component {
  render() {
    return (
      <CommonStage name="notify" demos={notifyDemos} stages={stages} />
    )
  }
}
export default NotifyStage;
