import React, { Component } from "react";
import { Input } from 'zent';

class ZentInputDemo1 extends Component {
  render() {
    return (
      <div>
        <Input placeholder="请输入名字" />
        <Input type="password" placeholder="请输入密码" />
        <Input className="foo" prefix="prprpr" maxLength={5} />
        <Input width={100} />
        <Input type="textarea" width={100} />
        <Input width="100px" />
        <Input type="textarea" width="100px" />
      </div>
    );
  }
}

export default ZentInputDemo1;
