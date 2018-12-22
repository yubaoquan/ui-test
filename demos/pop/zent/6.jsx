import React, { Component } from 'react';
import { Pop, Button } from 'zent';

class ZentPopDemo6 extends Component {
  state = {
    visible: false
  };

  onBeforeShow = (cont) => {
    setTimeout(cont, 500);
  };

  onBeforeClose = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  };

  render() {
    return (
      <Pop
        content="延迟500ms关闭"
        trigger="click"
        onBeforeShow={this.onBeforeShow}
        onBeforeClose={this.onBeforeClose}
      >
        <Button type="primary">延迟500ms打开</Button>
      </Pop>
      );
  }
}

export default ZentPopDemo6;
