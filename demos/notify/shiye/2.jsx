import React, { Component } from 'react';
import { Notify, Button } from '@ybq/ui';

class NotifyShiyeDemo2 extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => Notify.config({ duration: 1000 })}>调整持续时间为1s</Button>
        <Button onClick={() => Notify.config({ duration: 2000 })}>2s</Button>
        <Button onClick={() => Notify.config({ duration: 3000 })}>3s</Button>
        <br />
        <br />
        <Button onClick={() => Notify.success('成功通知')}>成功通知</Button>
        <Button onClick={() => Notify.error('错误通知')}>错误通知</Button>
      </div>
    )
  }
}

export default NotifyShiyeDemo2;
