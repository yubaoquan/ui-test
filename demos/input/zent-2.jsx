import React, { Component } from "react";
import { Input } from 'zent';
import './style';

class ZentInputDemo1 extends Component {
  render() {
    return (
      <div>
        <Input addonBefore="$" />
        <Input addonAfter="%" />
        <Input addonBefore="Buy" addonAfter="Apple" />
      </div>
    );
  }
}

export default ZentInputDemo1;
