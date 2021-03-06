import React, { Component } from 'react';
import { Pop, Button, Sweetalert } from 'zent';

class ZentPopDemo4 extends Component {
  confirmHandler = () => {
    Sweetalert.alert({
      content: 'Pop关闭了',
      parentComponent: this
    });
  }

  render() {
    return (
      <Pop
        trigger="click"
        content="提示内容"
        onConfirm={this.confirmHandler}
      >
        <Button type="primary">打开气泡</Button>
      </Pop>
    );
  }
}

export default ZentPopDemo4;
