import React, { Component } from 'react';
import { Notify, Button } from '@ybq/ui';

function customContent() {
  Notify.success(
    <div>
      <span style={{ color: '#f67' }}>颜色</span>
      <i>斜体</i>
      <b>粗体</b>
    </div>
  );
}

class NotifyShiyeDemo4 extends Component {
  render() {
    return (
      <Button onClick={customContent}>自定义内容通知</Button>
    )
  }
}

export default NotifyShiyeDemo4;
