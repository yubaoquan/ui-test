import React, { Component } from 'react';
import { Notify, Button } from 'zent';

function closeCallback() {
  alert("Notify has over");
}

class NotifyZentDemo5 extends Component {
  render() {
    return (
      <>
        <Button
          onClick={() => Notify.success("通知结束回调函数", 1000, closeCallback)}
        >
          自定义通知结束回调
        </Button>
        <Button onClick={() => Notify.clear()}>clear</Button>
      </>
    )
  }
}

export default NotifyZentDemo5;
