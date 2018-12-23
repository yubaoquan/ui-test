import React, { Component } from 'react';
import { Notify, Button } from 'zent';

class NotifyZentDemo1 extends Component {
  componentDidMount() {
    // Notify.config({ duration: 10000 });
  }
  render() {
    return (
      <div>
        <Button onClick={() => Notify.success('成功通知')}>成功通知</Button>
        <Button onClick={() => Notify.error('错误通知')}>错误通知</Button>
      </div>
    )
  }
}

export default NotifyZentDemo1;
