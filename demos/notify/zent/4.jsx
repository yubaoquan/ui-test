import React, { Component } from 'react';
import { Notify, Button } from 'zent';

function customContent() {
  Notify.success(
    <div>
      <span style={{ color: '#f67' }}>颜色</span>
      <i>斜体</i>
      <b>粗体</b>
    </div>
  );
}

class NotifyZentDemo4 extends Component {
  render() {
    return (
      <Button onClick={customContent}>自定义内容通知</Button>
    )
  }
}

export default NotifyZentDemo4;
