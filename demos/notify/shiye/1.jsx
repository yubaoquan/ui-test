import React, { Component } from 'react';
import { Notify, Button } from '@ybq/ui';

class NotifyShiyeDemo1 extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => Notify.success('成功通知')}>成功通知</Button>
        <Button onClick={() => Notify.error('错误通知')}>错误通知</Button>
        <Button onClick={() => Notify.clear()}>clear</Button>
      </div>
    )
  }
}

export default NotifyShiyeDemo1;
