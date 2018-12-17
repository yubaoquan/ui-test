import React, { Component } from "react";
import Input from '@ybq/ui/dist/input';
import "@ybq/ui/dist/input/index.css";

class ShiyeInputDemo1 extends Component {
  render() {
    return (
      <div>
        <Input placeholder="请输入名字" value="a" />
        <Input type="password" placeholder="请输入密码" />
        <Input className="foo" prefix="prprpr" />
      </div>
    );
  }
}

export default ShiyeInputDemo1;
