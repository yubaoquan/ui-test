import React, { Component } from "react";
import { Input } from 'zent';
import '../style';

class ZentInputDemo1 extends Component {
  render() {
    return (
      <div>
        <Input placeholder="请输入名字" value="a" />
        <Input type="password" placeholder="请输入密码" />
        <Input className="foo" prefix="prprpr" maxLength={5}  />
      </div>
    );
  }
}

export default ZentInputDemo1;
