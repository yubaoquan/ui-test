import React, { Component } from 'react';
import { Pop, Button } from 'zent';

class ZentPopDemo7 extends Component {
  state = {
    visible: false
  };

  close = () => {
    this.setState({
      visible: false
    });
  };

  open = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    const content = (
      <div>
        <p style={{ marginBottom: 10 }}>可以在 Pop 内部关闭</p>
      <Button type="primary" onClick={this.close}>关闭</Button>
      </div>
    );
    return (
      <div className="zent-doc-pop-none-trigger-container">
        <Pop
          content={content}
          trigger="none"
          visible={this.state.visible}
        >
          <Button type="primary" onClick={this.open}>打开</Button>
        </Pop>
        <Button disabled={!this.state.visible} onClick={this.close}>外部关闭</Button>
      </div>
    );
  }
}

export default ZentPopDemo7;
