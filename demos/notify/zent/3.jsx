import React, { Component } from 'react';
import { Notify, Button } from 'zent';

class NotifyZentDemo3 extends Component {
  render() {
    return (
      <div>
        <Button onClick={() => Notify.success('持续1s', 1000)}>持续1s</Button>
      </div>
    )
  }
}

export default NotifyZentDemo3;
