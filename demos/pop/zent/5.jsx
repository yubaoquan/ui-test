import React, { Component } from 'react';
import { Pop, Button } from 'zent';

class ZentPopDemo5 extends Component {
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
        type="danger"
        confirmText="Error"
        cancelText="Close"
        onConfirm={this.confirmHandler}
      >
        <Button type="primary">打开气泡</Button>
      </Pop>
    );
  }
}

export default ZentPopDemo5;
