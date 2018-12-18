import React, { Component } from "react";
import { Input } from 'zent';

class ZentInputDemo2 extends Component {
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

export default ZentInputDemo2;
