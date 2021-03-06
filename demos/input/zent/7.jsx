import React, { Component } from "react";
import { Input, Button } from 'zent';

class ZentInputDemo7 extends Component {
  focusAndSelectAll = () => {
    this.input.focus();
    this.input.select();
  }

  selectTheThirdChar = () => {
    this.input.focus();
    this.input.select(2, 3);
  }

  render() {
    return (
      <div>
        <Input defaultValue='测试内容' ref={input => this.input = input} />
        <Button onClick={this.focusAndSelectAll}>点击选择全部</Button>
        <Button onClick={this.selectTheThirdChar}>点击选择第三个字符</Button>
      </div>
    );
  }
}

export default ZentInputDemo7;
